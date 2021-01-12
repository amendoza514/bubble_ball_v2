import unirest from 'unirest'


export const getStats = async (req, res) => {
var req = unirest("GET", "https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/265");

req.headers({
	"x-rapidapi-key": "c58da8187bmsh4f7d4d00df2f25dp126899jsn3c9c7b80e407",
	"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	"useQueryString": true
});

  req.end(function (res) {
	if (res.error) console.log('nope');
    console.log(res.body);
    console.log(res.body.api.statistics[0]);
  });
   
};

