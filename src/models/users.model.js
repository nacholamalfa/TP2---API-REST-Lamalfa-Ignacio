const users = [
    {id: 1, nombreCompleto: "Juan Pérez", edad: 25, nota: 8.5},
    {id: 2, nombreCompleto: "María García", edad: 30, nota: 9.2},
    {id: 3, nombreCompleto: "Carlos López", edad: 22, nota: 7.8},
    {id: 4, nombreCompleto: "Ana Rodríguez", edad: 28, nota: 9.0}
]

console.log("Persistiendo en la memoria del servidor.")

const getUsers = async () => {
    return await users
}

const postUsers = async (user) => {
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
    const newUser = { id: newId, ...user }
    users.push(newUser)
    return await newUser
}

const patchUsers = async (id, userData) => {
    const index = users.findIndex((e) => e.id == id)
    if(index == -1){
        return "Error. No se encontró el usuario con el id proporcionado."
    } else {
        users[index] = { ...users[index], ...userData }
        return users[index]
    }
}

export default {
    getUsers,
    postUsers,
    patchUsers
}