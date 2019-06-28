const express = require('express');

const server = express();

const dummyData = {
  1: { name: "Carl", fruit: "banana" },
  2: { name: "Jessica", fruit: "papaya" },
  3: { name: "Murdock", fruit: "apple" }
};

server.use(express.json());

module.exports = server;
module.exports.dummyData = dummyData;