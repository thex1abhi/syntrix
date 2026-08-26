

import { ChatGroq } from "@langchain/groq"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"


const groq = new ChatGroq({
    //gemini key is from yabhi
    model: "openai/gpt-oss-120b",
})

const gemini = new ChatGoogleGenerativeAI({
    //gemini key is from abhishek84
    model: "gemini-2.5-pro",
}) 