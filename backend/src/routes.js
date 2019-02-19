const express = require('express')

const routes = express.Router()

const userController = require('./controllers/userController')

const authController = require('./controllers/authcontroller')

routes.post('/create', userController.create)
routes.post('/updateUser/:id', userController.update)
routes.get('/user/:id', userController.get)
routes.post('/login', authController.auth)
routes.get('/get',(req,res)=>{
    res.send("ok")
})
module.exports = routes
