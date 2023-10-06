const Cupom = require('./Cupom.model')

async function getOneCupom(req, res){
    const {id} = req.params
    const cupom = await Cupom.findOne({_id: id})
    try{ 
        res.json(cupom)
    }catch(err){
        console.log(err)
        res.json({msg:"Ocorreu um erro"})
    }
}

module.exports = getOneCupom