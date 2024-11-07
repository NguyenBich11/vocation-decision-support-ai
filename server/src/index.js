const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000; //backend port
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Cho phép tất cả các domain
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
    ];
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
