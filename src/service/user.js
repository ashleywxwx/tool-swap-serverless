'use-strict'

const uuidv4 = require("uuid/v4");
const {getClient, selectUser, insertUser, selectAllUsers} = require("./db");

const client = getClient();

const createUser = async (user) => {
    // Generate UUID for new users
    const userUUID = uuidv4();
    user.uuid = userUUID;

    await insertUser(client, user);

    // Look up the latest user
    const foundUser = await selectUser(client, userUUID);

    await client.end();
    return foundUser;
}

const getUser = async (uuid) => {
    const user = await selectUser(client, uuid)
    await client.end();
    return user;
}

const getUsers = async () => {
    const users = await selectAllUsers(client);
    await client.end();
    return users;
}

module.exports = {
    createUser,
    getUser,
    getUsers,
}