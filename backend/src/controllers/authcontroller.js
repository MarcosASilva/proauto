const User = require('../models/user')

const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400,
        
    });

};

module.exports = {
    async auth(req,res){
        const {cpf, placa} = req.body
        const user = await User.findOne({cpf,placa})

        if(!user){
            res.send({
                msg: "NotUser"
            })

        }
        res.send({
            user,
            token:generateToken({id: user.id})})
    }
}
