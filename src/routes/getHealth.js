'use strict';
const {getHealth} = require("../service/db");

module.exports.getHealth = async (event) => {

    console.log(JSON.stringify(event));

    let results = await getHealth();

    if (results) {
        return {
            statusCode: 200,
            body: "Healthy",
        };
    } else {
        console.error("Was not able to connect to DB for health check.");
        return {
            statusCode: 500,
            body: "Internal Server Error"
        }
    }
};
