import mongoose from "mongoose";

const messageSchmea = new mongoose.Schema({

    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "conversation"
    },
    role: {
        type: String,
        enum: ["user", "assistant"]
    },
    content: String,

}, { timestamps: true })


const Message = mongoose.model("Messages", messageSchmea)
export default Message