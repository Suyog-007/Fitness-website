const express = require("express");
const axios = require("axios");

const combineApi = async (req, res, next) => {
  try {
    console.log(process.env.YoutubeDB_X_RapidAPI_Host);
    const exerciseOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.ExerciseDB_X_RapidAPI_Key,
        "X-RapidAPI-Host": process.env.ExerciseDB_X_RapidAPI_Host,
      },
    };

    const youtubeOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.YoutubeDB_X_RapidAPI_Key,
        "X-RapidAPI-Host": process.env.YoutubeDB_X_RapidAPI_Host,
      },
    };

    const BMIOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.BMI_X_RapidAPI_Key,
        "X-RapidAPI-Host": process.env.BMI_X_RapidAPI_Host,
      },
    };
    const exerciseData = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises`,
      exerciseOptions
    );
    const youtubeData = await axios.get(
      `https://youtube-search-and-download.p.rapidapi.com`,
      youtubeOptions
    );
    const Data = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises`,
      BMIOptions
    );

    res.send({ exerciseData, youtubeData, Data });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: "error" });
  }
};

module.exports = {
  combineApi,
};
