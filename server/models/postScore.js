import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    character: String, 
    score: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostScore = mongoose.model('PostScore', postSchema);

export default PostScore;