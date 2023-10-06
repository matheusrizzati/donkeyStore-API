const Product = require('./Product.model')

async function updateProduct(req, res){
    const {id} = req.params
    try{
        const product = await Product.findOneAndUpdate({_id: id}, req.body, {new:true})
        res.json({msg: "Loja atualizada com sucesso", product})
    }catch(err){
        res.json({msg: "Ocorreu um erro!"})
        console.log(err)
    }
}

module.exports = updateProduct