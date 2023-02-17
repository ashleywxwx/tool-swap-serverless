'use strict'
const Client = require("serverless-mysql");

const dbClient = Client({
    config: {
        host: process.env.AURORA_HOST,
        database: process.env.DB_NAME,
        user: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})

const getHealth = async () => {
    return await dbClient.query("SELECT 1");
}

const init = async () => {
    await dbClient.query(`
    CREATE TABLE IF NOT EXISTS users
    (
        id MEDIUMINT UNSIGNED not null AUTO_INCREMENT, 
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        uuid char(36) not null, 
        name varchar(100) not null, 
        PRIMARY KEY (id)
    );  
    `)
    await dbClient.query(`
    CREATE TABLE IF NOT EXISTS tools
    (
        id MEDIUMINT UNSIGNED not null AUTO_INCREMENT, 
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        uuid char(36) not null, 
        tool_name varchar(100) not null,
        description varchar(255) not null,
        user_id MEDIUMINT UNSIGNED not null,
        PRIMARY KEY (id)
    );  
    `)
}

module.exports = {
    getHealth,
    init
}