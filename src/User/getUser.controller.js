const User = require("./User.model")

async function getUser(req, res){
    const {id} = req.params

    try{
        const user = await User.findById(id)
        return res.json(user)
    }catch(err){
        return res.json({msg: "Ocorreu um erro"})
        console.log(err)
    }
}

module.exports = getUser