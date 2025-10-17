
const validateUser = async (req, res, next) => {
    if (req.method === 'POST') {
        if (!req.body.nombreCompleto || !req.body.edad || !req.body.nota) {
            return res.send("Error: nombreCompleto, edad y nota son obligatorios.")
        }
    }
    
    if (req.method === 'PATCH') {
        if (!req.body.nombreCompleto && !req.body.edad && !req.body.nota) {
            return res.send("Error: Debe proporcionar al menos un campo para actualizar.")
        }
    }
    
    console.log("Validación completada correctamente.")
    next()
}

export default {
    validateUser
}