import { searchTool } from "../config/tavily.js";
import { deductCredtis } from "../utils/deductCredits.js";


export const searchAgent = async (state) => {
    try {
        const results = await searchTool.invoke({
            query: state.prompt
        })
        await deductCredtis(state.userId, "search")

        return {
            ...state,
            searchResults: results,
            images: results.images
        }
    } catch (error) {

        return {
            ...state,
            searchResults: [],
            images: []
        }
    }
}