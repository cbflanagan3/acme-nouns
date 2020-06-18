const { db, seed } = require('./db_index')
const chalk = require('chalk');
const express = require('express')

const app = express();

const PORT = process.env.PORT || 3000;

const startServer = () => new Promise ((res, rej) => {
    app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
    
})

const startApp = () => {
    return startServer();
}

startApp();
