import mongoose from 'mongoose';

const statSchema = mongoose.Schema({
    name: String,
    scoreAvg: {
        type: Number,
        default: 0
    },
    assistAvg: {
        type: Number,
        default: 0
    },
    rebAvg: {
        type: Number,
        default: 0
    },
    createdAt: { type: Date, expires: '2m', default: Date.now },
});
const Stat = mongoose.model('Stat', statSchema);

export default Stat;