import usersService from "../services/users.service.js"


const getUsers = async (req, res) => {
    const users = await usersService.getUsers()
    res.send(users)
}

const postUsers = async (req, res) => {
    const user = req.body
    const data = await usersService.postUsers(user)
    res.send(data)
}

const patchUsers = async (req, res) => {
    const { id } = req.params
    const userData = req.body
    const data = await usersService.patchUsers(id, userData)
    res.send(data)
}

export default {
    getUsers,
    postUsers,
    patchUsers
}