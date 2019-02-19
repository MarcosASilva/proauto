const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
mongoose.connect("mongodb://proauto-marcos:pro1234@ds133865.mlab.com:33865/proauto",
{
    useNewUrlParser: true
})
app.use(cors())
app.use(express.json())
app.use(require('./routes'))


app.listen(8080, () => {
    console.log("Server inicialiazado na porta 8000")
})
