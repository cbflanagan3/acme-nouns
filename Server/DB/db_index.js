const Sequelize = require('sequelize');
const DB_URL = process.env.DB_URL || 'postgres://localhost:5432/acme_nouns'
const db = new Sequelize(DB_URL);
const chalk = require('chalk');

const seed = async (force = false) => {
    try{await db.sync({force})
    console.log(chalk.green(`Database successfully connected and synced`))
}
    catch(e){
        console.log(chalk.red(`Error while connecting to database`))
        throw(e)
    }
}

module.exports = { db, seed };
