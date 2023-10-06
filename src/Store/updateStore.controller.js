const Store = require('./Store.model')

async function updateStore(req, res){
    const {id} = req.params
    try{
        const store = await Store.findOneAndUpdate({_id: id}, req.body, {new:true})
        res.json({msg: "Loja atualizada com sucesso", store})
    }catch(err){
        res.json({msg: "Ocorreu um erro!"})
        console.log(err)
    }
}

module.exports = updateStore