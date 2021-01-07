//handlers for our routes
import PostScore from '../models/postScore.js';

export const getScores = async (req, res) => {
    try {
        const postScores = await PostScore.find();
        console.log(postScores);

        res.status(200).json(postScores);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createScore = async (req, res) => {
    const score = req.body;
    const newScore = new  PostScore(score);

    try {
        await newScore.save();

        res.status(201).json(newScore);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}