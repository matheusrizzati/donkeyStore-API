const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('./User.model')

async function login(req, res){
    const {username, password} = req.body

    const user = await User.findOne({username})
    if (!user || user === null || user === undefined){
        return res.json({msg: "Username não cadastrado"})
    }

    if (password !== user.password){
        return res.json({msg: "Senha incorreta!"})
    }

    try{
        const token = jwt.sign(
            user._id.toString(),
            process.env.SECRET
        )
        return res.json({msg: "Login bem sucedido!", token})
    }
    catch(err){
        res.json({msg: "Ocorreu um erro!"})
        console.log(err)
    }
}
 
module.exports = login