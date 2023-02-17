'use strict';

const {createUser} = require("../service/user");

module.exports.postUser = async (event) => {

    const user = JSON.parse(Buffer.from(event.body, 'base64').toString());
    console.log(`Creating user: ${JSON.stringify(user)}`);

    try {
        const newUser = await createUser(user);
        console.log(`New user created: ${JSON.stringify(newUser)}`);
        return {
            "statusCode": 201,
            "body": JSON.stringify(newUser),
            "headers": {
                "Content-Type": "application/json"
            }
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: "Internal Server Error Creating Resource"
        }
    }


};
