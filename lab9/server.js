const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const diamondImg ='./img/diamond.jpg';
const rubinImg = './img/rubin.jpg';
const smaragdImg = './img/smaragd.jpg';
const stoneImg = './img/stone.jpg';

const path = require('path');


// Middleware
app.use(bodyParser.json());
app.use(cors());


app.use(express.static(path.join('C:','Users','levms','web','lab8',)));

const objectsData = [
  {
      id: 0,
      title: "Diamond",
      strength: "high",
      img: diamondImg,
      description: "It is a jewelry stone.",
      price: 1000,
  },
  {
      id: 1,
      title: "Rubin",
      strength: "low",
      img: rubinImg,
      description: "It is a jewelry stone.",
      price: 800,
  },
  {
      id: 2,
      title: "Smaragd",
      strength: "medium",
      img: smaragdImg,
      description: "It is a jewelry stone.",
      price: 900,
  },
  {
      id: 3,
      title: "Stone",
      strength: "low",
      img: stoneImg,
      description: "It is a jewelry stone.",
      price: 100,
  },
  {
      id: 4,
      title: "Diamond",
      strength: "high",
      img: diamondImg,
      description: "It is a jewelry stone.",
      price: 2000,
  },
  {
      id: 5,
      title: "Rubin",
      strength: "low",
      img: rubinImg,
      description: "It is a jewelry stone.",
      price: 450,
  },
  {
      id: 6,
      title: "Smaragd",
      strength: "medium",
      img: smaragdImg,
      description: "It is a jewelry stone.",
      price: 700,
  },
  {
      id: 7,
      title: "Stone",
      strength: "low",
      img: stoneImg,
      description: "It is a jewelry stone.",
      price: 60,
  },
    // {
    //   id: 22,
    //   title: "Stone12345",
    //   strength: "low",
    //   img: stoneImg,
    //   description: "It is a jewelry stone.",
    //   price: 60,
    // }
]

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/img', express.static(path.join(__dirname, 'src', 'img')));


// In-memory data storage initialized with predefined list
let itemsData = [...objectsData];


// Root route to send index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'server'));
});

// GET /items - Fetch all items
app.get('/get', (req, res) => {
    res.json(itemsData);
});

// Server Initialization
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Exporting for testing purposes
module.exports = { app, objectsData };