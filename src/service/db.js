'use strict'

const Client = require("serverless-mysql");

const client = Client({
    config: {
        host: process.env.AURORA_HOST,
        database: process.env.DB_NAME,
        user: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})

const getClient = () => {
    return client;
}

const insertUser = async (client, user) => {
    await client.query('INSERT INTO users (uuid, name) VALUES(?,?)', [user.uuid, user.name]);
    return await selectUser(client, user.uuid);
}

const selectUser = async (client, uuid) => {
    let results = await client.query(`SELECT id, uuid, name FROM users WHERE uuid = ?`, [uuid]);

    return {
        uuid: results[0].uuid,
        name: results[0].name
    }
}

const selectAllUsers = async (client) => {
    let results = await client.query(`SELECT * FROM users`);

    console.log(`Results: ${results}`);
    console.log(`Results[0]: ${results[0]}`);

    const response = results.map(result => {
        return {"uuid": result.uuid, "name": result.name}
    })

    console.log(`Response: ${JSON.stringify(response)}`)

    return response;
}

const getHealth = async () => {
    const results = await client.query(`SELECT 1`);
    await client.end();
    return results;
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
    await client.end();
}

module.exports = {
    insertUser,
    selectUser,
    selectAllUsers,
    getHealth,
    init,
    getClient
}