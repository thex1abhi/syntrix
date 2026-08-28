
import { Annotation } from "@langchain/langgraph"

export const agentState = Annotation.Root({
    prompt: Annotation(),
    aiResponse: Annotation(),
    agentKey: Annotation(),
    converstionId: Annotation(),
}) 