const Product = require('./Product.model')

async function getOneProduct(req, res){
    const {id} = req.params
    const product = await Product.find({_id: id})
    try{ 
        res.json(product)
    }catch(err){
        console.log(err)
        res.json({msg:"Ocorreu um erro"})
    }
}

module.exports = getOneProduct