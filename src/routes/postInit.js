'use strict';
const {init} = require("../service/db");

module.exports.postInit = async (event) => {

    console.log(JSON.stringify(event));

    await init();

    return {
        statusCode: 200,
        body: "Initialized",
    };
};
