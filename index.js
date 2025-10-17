import express from "express"
import usersRoute from "./src/routes/users.route.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api", usersRoute)

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))