import { getModel } from "../config/llmmodel.js"
import axios from "axios"
import { getFromS3 } from "../utils/getFromS3.js"
import { uploadToS3 } from "../utils/uploadToS3.js"
import { deductCredtis } from "../utils/deductCredits.js"

export const visionAgent = async (state) => {

    try {
        const llm = await getModel("image")

        const res = await llm.invoke(` 
        You are an elite AI image prompt engineeer 
        
        convert the user request into a highly detailed imamge generation prompt.

        Requirements: 
        - Cinematic lighting 
        -Professional composition 
        - Ultra realistic 
        -High detail 
        - Beautiful color palette 
        - Sharp focus 
        - 8K quality
        -Photorealistic 
        -Depth of field 
        -Professional photography 
        - Stunning visuals 
        
        Return only the image prompt 

        User Request :
        ${state.prompt}
        `)

        const prompt = res.content.trim()

        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`
        const imageRes = await axios.get(imageUrl, { responseType: "arraybuffer" })
        await deductCredtis(state.userId, "vision")

        const buffer = Buffer.from(imageRes.data)
        const filename = `image-${Date.now()}.png`

        await uploadToS3(filename, buffer, "image/png")
        const downloadUrl = await getFromS3(filename, 24 * 60)
        return {
            ...state,
            aiResponse: `# ✔ Image Generated Successfully

![Generated Image](${downloadUrl})

⤵ [Download Image](${downloadUrl})

⏳ Link expires in 10 minutes.`
        };
    } catch (error) {

        return {
            ...state,
            aiResponse: " ❌ failed to generate image  "
        }
    }

}
