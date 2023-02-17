'use strict';

const {getUsers} = require("../service/user");

module.exports.getUsers = async (event) => {

    console.log('Fetching all users');

    const users = await getUsers();

    return {
        statusCode: 200,
        body: JSON.stringify(users),
    };
};
