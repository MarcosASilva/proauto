const User = require('../models/user')

module.exports = {
    async update(req,res){
        const user = await User.findById(req.params.id)
        const {rua, bairro, cidade, uf} = req.body 
        user.set({
            end: {
                rua: rua,
                bairro: bairro,
                cidade: cidade,
                uf: uf
            }
        })
        await user.save()
        return res.json(user)
    },
    async create(req,res){

       const {cpf,placa} = req.body
        if(await User.findOne({cpf})){
            return res.status(400).send({ error: 'User cadastrado'});
        }

        const user = await User.create(req.body)

        return res.json(user)
    } ,
    async get(req,res){
        const user = await User.findById(req.params.id)

        return res.json(user)
    }

}