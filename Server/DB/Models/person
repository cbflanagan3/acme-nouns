const { STRING, UUID, UUIDV4 } = require('sequelize')
const db = require('../db_index')

const Person = db.define('person', { 
    id: { 
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4,
     },
     name: {
         type: STRING,
         allowNull: false,
         unique: true,
         notEmpty: true,
     }

     
 })

 module.exports = Person;
