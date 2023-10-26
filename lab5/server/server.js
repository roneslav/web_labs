const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join('C:','Users','levms','mrt_web')));

const PREDEFINED_ITEMS = [
    {
        imageSrc: "/img/diamond.jpg",
        title: 'Diamond',
        description: 'It is a beautiful jewelry stone',
        price: '1000'
    },
    {
        imageSrc: "/img/rubin.jpg",
        title: 'Rubin',
        description: 'It is a beautiful jewelry stone',
        price: '800'
    },
    {
        imageSrc: "/img/smaragd.jpg",
        title: 'Smaragd',
        description: 'It is a beautiful jewelry stone',
        price: '900'
    }
];

let itemsData = [...PREDEFINED_ITEMS];

app.get('/', (req, res) => {
    res.sendFile(path.join('C:','Users','levms','mrt_web', 'index.html'));
});

app.get('/items', (req, res) => {
    res.json(itemsData);
});

app.post('/items', (req, res) => {
    const newItem = req.body;
    itemsData.push(newItem);
    res.json(newItem);
});

app.put('/items/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < itemsData.length) {
        itemsData[index] = req.body;
        res.json(itemsData[index]);
    } else {
        res.status(400).json({ message: "Invalid index." });
    }
});

app.delete('/items/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < itemsData.length) {
        itemsData.splice(index, 1);
        res.json({ message: "Item deleted successfully!" });
    } else {
        res.status(400).json({ message: "Invalid index." });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;