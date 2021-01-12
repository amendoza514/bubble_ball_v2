import unirest from 'unirest';
import Stat from '../models/Stat.js';


export const getStats = async (req, res) => {
var req = unirest("GET", "https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/265");

req.headers({
	"x-rapidapi-key": "c58da8187bmsh4f7d4d00df2f25dp126899jsn3c9c7b80e407",
	"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	"useQueryString": true
});

//   req.end(function (res) {
//     if (res.error) console.log('nope');
//     return res.json('ya')
//     console.log(res.body);
//     console.log(res.body.api.statistics[0]);
//   });

  try {
        const newStat = await Stat.find();
        console.log(newStat);

        res.status(200).json(newStat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
   
};

export const createStat = async (req, res) => {
    const { name, scoreAvg, assistAvg, rebAvg } = req.body;
    const newStat = new Stat({ name, scoreAvg, assistAvg, rebAvg });

    try {
        await newStat.save();
        res.status(201).json(newStat);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
