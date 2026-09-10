import { getModel } from "../config/llmModel.js"
import axios from "axios"

export const visionAgent = async (state) => {
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
    const buffer = Buffer.from(imageRes.data)
    const filename = `${Date.now()}.png`

    await uploadToS3(filename, buffer, "image/png")
}
