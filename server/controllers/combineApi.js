const express = require("express");
const axios = require("axios");

const getAllPosts = async (req, res) => {
  try {
    res.send("Hello");
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: "error" });
  }
};

module.exports = {
  getAllPosts
};