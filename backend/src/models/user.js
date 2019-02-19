const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    nome:String,
    cpf:String,
    placa:String,
    end: {
        rua:String,
        bairro:String,
        cidade:String,
        uf:String

    },
    tel:String
})

module.exports = mongoose.model("User", userSchema)