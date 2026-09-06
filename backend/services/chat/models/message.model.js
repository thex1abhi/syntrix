import mongoose from "mongoose";


const fileSchema = new mongoose.Schema({
    name: String,
    content: String
}, {
    _id: false
})

const artifactSchema = new mongoose.Schema({
    id: Number,
    type: String,
    title: String,
    files: [fileSchema]
}, {
    _id: false
})

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
    images: [String],
    artifacts: [artifactSchema]


}, { timestamps: true })


const Message = mongoose.model("Messages", messageSchmea)
export default Message