//Calling API's
const express = require("express");
const axios = require("axios");

const combineApi = async (req, res, next) => {
  try {
    console.log(process.env.YoutubeDB_X_RapidAPI_Host);
    const exerciseOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e020821d1bmshae0cd8d04956914p1058a9jsnafe277244949",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const youtubeOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e020821d1bmshae0cd8d04956914p1058a9jsnafe277244949",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      },
    };

    const { data } = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
      exerciseOptions
    );
    console.log(data)
    // const youtubeData = await axios.get(
    //   `https://youtube-search-and-download.p.rapidapi.com`,
    //   youtubeOptions
    // );
    //res.send({ exerciseData, youtubeData, Data });
    return res.send(data)
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: "error" });
  }
};

module.exports = {
  combineApi,
};
