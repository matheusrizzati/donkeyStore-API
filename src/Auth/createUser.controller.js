const User = require('./User.model')

async function createUser(req, res){
    const {username, password, confirmPassword} = req.body
    if (!username || !password || !confirmPassword){
        return res.json({msg: "Preencha todos os campos"})
    }

    if (password !== confirmPassword){
        return res.json({msg: "Senha e confirmar senha são diferentes"})
    }

    const user = new User({
        username,
        password,
    })

    try{
        await user.save()
        return res.json({
            msg: "Usuário cadastrado com sucesso!",
        })
    }catch(err){
        return res.json({msg: "Ocorreu um erro"})
        console.log(err)
    }
}

module.exports = createUser