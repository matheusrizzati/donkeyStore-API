const Cupom = require('./Cupom.model')

async function updateCupom(req, res){
    const {id} = req.params
    try{
        const cupom = await Cupom.findOneAndUpdate({_id: id}, req.body, {new:true})
        res.json({msg: "Cupom atualizado com sucesso", cupom})
    }catch(err){
        res.json({msg: "Ocorreu um erro!"})
        console.log(err)
    }
}

module.exports = updateCupom