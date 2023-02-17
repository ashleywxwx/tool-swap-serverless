'use strict';
const Client = require("serverless-mysql");

const mysql = Client({
    config: {
        host: process.env.AURORA_HOST,
        database: process.env.DB_NAME,
        user: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})

module.exports.getHealth = async (event) => {

    console.log(JSON.stringify(event));

    let results = await mysql.query("SELECT 1")

    if (results) {
        return {
            statusCode: 200,
            body: "Healthy",
        };
    } else {
        return {
            statusCode: 500,
            body: "Internal Server Error"
        }
    }
};
