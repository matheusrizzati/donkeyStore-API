const Cupom = require('./Cupom.model')

async function createCupom(req, res){
    let {name, percentage, isInteger, integerValue, storeId} = req.body
    console.log(req.body)
    if(!name){
        return res.json({msg:"Preencha todos os dados"})
    }
    if(!isInteger){
        integerValue = null
    }
    if(!isInteger && !percentage){
        return res.json({msg:"Preencha todos os dados"})
    }
    if(isInteger){
        percentage = null
    }
    if(isInteger && !integerValue){
        return res.json({msg:"Preencha todos os dados"})
    }

    const cupom = new Cupom({ 
        name, percentage, isInteger, integerValue, usedTimes: 0, storeId
    })

    try{
        await cupom.save()
        return res.json({"msg":"Cupom criado com sucesso", cupom})
    }catch(err){
        console.log(err)
        return res.json({"msg":"Ocorreu um erro"})
    }
}

module.exports = createCupom