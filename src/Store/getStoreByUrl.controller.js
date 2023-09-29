const Store = require('./Store.model')

async function getOneStore(req, res){
    const {url} = req.params

    try{
        const store = await Store.findOne({url})
        return res.json(store)
    }catch(err){
        res.json({msg: "Ocorreu um erro!"})
        console.log(err)
    }
}

module.exports = getOneStore