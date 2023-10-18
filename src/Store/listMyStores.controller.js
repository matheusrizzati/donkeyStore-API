const Store = require('./Store.model')

async function listMyStores(req, res){
    const id = req.id
    console.log(id)
    try{
        const stores = await Store.find({ownerId: id})
        return res.json(stores)
    }catch(err){
        res.json({msg: "Ocorreu um erro!"})
        console.log(err)
    }
}

module.exports = listMyStores