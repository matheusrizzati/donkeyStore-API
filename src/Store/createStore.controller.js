const Store = require('./Store.model')

async function createStore(req, res){
    const ownerId = req.id
    const {storeName} = req.body
    if (!storeName){
        return res.json({msg:"Preencha todos os dados"})
    }

    const store = new Store({
        storeName,
        ownerId
    })

    try{
        await store.save()
        return res.json({msg: "Loja criada com sucesso"})
    }catch(err){
        res.json({msg: "Ocorreu um erro!"})
        console.log(err)
    }
}

module.exports = createStore