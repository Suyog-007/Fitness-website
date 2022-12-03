//Calling API's
const axios = require("axios");

const combineApi = async (req, res, next) => {
  try {
    console.log(process.env.YoutubeDB_X_RapidAPI_Host);
    const exerciseOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6e04bcab61msh0a61ecbe20bc424p103563jsn63a24e573126",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const youtubeOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      },
    };

    var { data } = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${req.params.id}`,
      exerciseOptions
    );
    const exerciseData = data;
    var { data } = await axios.get(
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData.name} exercise`,
      youtubeOptions
    );
    return res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  combineApi,
};
