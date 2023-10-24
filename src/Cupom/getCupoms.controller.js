const Cupom = require('./Cupom.model')

async function getCupoms(req, res){
    const cupom = await Cupom.find(req.query)
    if (cupom.length === 0 || !cupom || cupom === null){
        return res.json([])
    }
    try{ 
        return res.json(cupom)
    }catch(err){
        console.log(err)
        res.json({msg:"Ocorreu um erro"})
    }
}

module.exports = getCupoms