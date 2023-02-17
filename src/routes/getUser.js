'use strict';

const {getUser} = require("../service/user");

module.exports.getUser = async (event) => {

    const userId = event.pathParameters.userId;
    console.log(`Getting user ID ${userId}`)
    const user = await getUser(userId)
    console.log(`Found user: ${JSON.stringify(user)}`)

    if (user) {
        return {
            statusCode: 200,
            body: JSON.stringify(user),
        };
    } else {
        return {
            statusCode: 404,
            body: `User Not Found: ${userId}`
        }
    }
};
