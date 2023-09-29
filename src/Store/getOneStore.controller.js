const Store = require('./Store.model')

async function getOneStore(req, res){
    const {id} = req.params

    try{
        const store = await Store.findOne({_id: id})
        return res.json(store)
    }catch(err){
        res.json({msg: "Ocorreu um erro!"})
        console.log(err)
    }
}

module.exports = getOneStore