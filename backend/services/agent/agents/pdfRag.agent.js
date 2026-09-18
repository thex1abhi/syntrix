import fs from "fs"
import { PDFParse } from "pdf-parse"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { vectorStore } from "../config/vectordb.js";
import { getModel } from "../config/llmmodel.js";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { deductCredtis } from "../utils/deductCredits.js";
import { CheckAgentLimit } from "../config/agentLimits.js";

export const pdfRag = async (state) => {
    try {
        await CheckAgentLimit(state.userId, "pdf")
        const buffer = fs.readFileSync(state.file.path)
        const pdf = new PDFParse({
            data: buffer
        })

        const result = await pdf.getText()
        const text = result.text
        const spilliter = new RecursiveCharacterTextSplitter({
            chunkSize: 1000,
            chunkOverlap: 200,
        })

        const docs = await spilliter.createDocuments([text])

        const collectionName = `pdf-${Date.now()}`

        const store = await vectorStore(docs, collectionName)

        const relevantDocs = await store.similaritySearch(state.prompt, 5)

        const context = relevantDocs.map(d => d.pageContent).join("\n\n")

        const llm = await getModel("pdf-rag")

        const messages = [
            new SystemMessage(
                `You are SyntrixAI pdf assistant  
                Rules :
                -Answer only from the uploaded pdf.
                -Never make up informaton.
                -If the answer is not present in the PDF, reply:
                "I couldn't find this information in the uploaded PDF ".
                - Use markdown formatting 
                `
            ),
            new HumanMessage(
                `
                Context : ${context}
                Question : ${state.prompt}
                `
            )
        ]

        const response = await llm.invoke(messages)


        await deductCredtis(state.userId, "pdf")
        return {
            ...state,
            aiResponse: response.content
        }

    } catch (error) {

        return {
            ...state,
            aiResponse: error?.data?.message || "Failed to analyze pdf "
        }
    }
    finally {
        fs.unlinkSync(state.file.path)
    }
}