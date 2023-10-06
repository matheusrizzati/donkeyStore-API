const Cupom = require('./Cupom.model')

async function deleteCupom(req, res){
    const {id} = req.params
    const cupom = await Cupom.deleteOne({_id: id})
    try{ 
        res.json({msg:"Cupom deletado com sucesso"})
    }catch(err){
        console.log(err)
        res.json({msg:"Ocorreu um erro"})
    }
}

module.exports = deleteCupom