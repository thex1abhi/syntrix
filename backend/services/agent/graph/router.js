import { getModel } from "../config/llmmodel.js"

export const router = async (state) => {


    if (state.agent && state.agent !== "auto") {
        return {
            ...state,
            agent: state.agent
        }
    }


    const llm = await getModel("router")
    const prompt = `You are an agent router 
     
     Available agents  : 
     -chat
     -search 
     - coding
     -pdf
     -ppt
     -image

Rules: 

chat:
General conversation,
explanations,
learning,
questions.

search : 
current events,
latest information,
 news,
 recent developments ,
 internet lookup.

 coding:
 Generate code ,
 debug code,
 build projects,
  architecture,
  API design.

  pdf:
  Questions about  generate PDFs or document context.

  ppt: 
   Questions about generate ppt or ppt context . 

vision:
Generate image ,
 create image,

 
   Return only one word :
   chat 
   search
   coding
   pdf 
   ppt 
   vision
  
   User Query:
   ${state.prompt}
     `

    const response = await llm.invoke(prompt)

    return {
        ...state,
        agent: response.content
            .trim()
            .toLowerCase()
    }

}