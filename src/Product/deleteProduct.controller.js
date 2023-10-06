const Product = require('./Product.model')

async function getOneProduct(req, res){
    const {id} = req.params
    const product = await Product.deleteOne({_id: id})
    try{ 
        res.json({msg:"Produto deletado com sucesso"})
    }catch(err){
        console.log(err)
        res.json({msg:"Ocorreu um erro"})
    }
}

module.exports = getOneProduct