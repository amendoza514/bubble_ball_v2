import  mongoose  from 'mongoose';
import unirest from 'unirest';
import Stat from '../models/Stat.js';


export const getStats = async (req, res) => {
  try {
        const newStat = await Stat.find();
        console.log(newStat);
        res.status(200).json(newStat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createStat = async (req, res) => {
    var req = unirest("GET", "https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/265");

    req.headers({
      "x-rapidapi-key": "c58da8187bmsh4f7d4d00df2f25dp126899jsn3c9c7b80e407",
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "useQueryString": true
    });

    req.end(function (res) {
      if (res.error) console.log('nope');
      let randInt =   Math.floor(Math.random() * Math.floor(300));
      let data = res.body.api.statistics[randInt]
      // console.log(data.points)
      const newStat = new Stat({ name:"lebron",scoreAvg:data.points, assistAvg:data.assists, rebAvg:data.totReb });
      newStat.save();
    });
};

export const updateStat = async (req, res) => {
      const { id: _id } = req.params;
      const stat = req.body

      if (mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no stat that matches');

      const updatedStat = await Stat.findByIdAndUpdate(_id, stat, { new: true});

      res.json(updatedStat);
}

export const deleteStat = async (req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no stat that matches');
    await Stat.findByIdAndRemove(id);

    res.json({ message: 'Stat deleted successfully'})
}