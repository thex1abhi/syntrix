import mongoose from "mongoose";


const conversationSchmea = new mongoose.Schema({

    title: {
        type: String,
        default: "New Chat"
    },
    userId: {
        type: String,
    }
}, { timestamps: true })

const Conversation = mongoose.model("Conversation", conversationSchmea)
export default Conversation