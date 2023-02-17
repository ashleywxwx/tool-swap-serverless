'use strict';

module.exports.getUsers = async (event) => {

    console.log(JSON.stringify(event));

    return {
        statusCode: 200,
        body: "Hello World",
    };
};
