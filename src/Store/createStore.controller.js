const Store = require('./Store.model')

async function createStore(req, res){
    const ownerId = req.id
    const {storeName, url} = req.body
    if (!storeName || !url){
        return res.json({msg:"Preencha todos os dados"})
    }

    const replacedUrl = url.replace(' ', '-')
    const exist = await Store.findOne({url: replacedUrl})
    if(exist){
        return res.json({msg:"Essa URL ja está em uso"})
    }

    const store = new Store({
        storeName,
        url: replacedUrl,
        ownerId,
        layout: 'basicLight',
        isActive: false,
        paymentConfig:''
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