import usersModel from "../models/users.model.js"


const getUsers = async () => {
    const users = await usersModel.getUsers()
    return users
}

const postUsers = async (user) => {
    const users = await usersModel.postUsers(user)
    return users
}

const patchUsers = async (id, userData) => {
    const users = await usersModel.patchUsers(id, userData)
    return users
}

export default {
    getUsers,
    postUsers,
    patchUsers
}