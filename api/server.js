const express = require('express');

const server = express();

let dummyData = {
  1: { name: "Carl", fruit: "banana" },
  2: { name: "Jessica", fruit: "papaya" },
  3: { name: "Murdock", fruit: "apple" }
};

const initialDummyData = {
  1: { name: "Carl", fruit: "banana" },
  2: { name: "Jessica", fruit: "papaya" },
  3: { name: "Murdock", fruit: "apple" }
};

const resetDummyData = () => {
  dummyData = Object.assign({}, initialDummyData);
}

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json(dummyData);
})

module.exports = server;
module.exports.dummyData = dummyData;
module.exports.resetDummyData = resetDummyData;