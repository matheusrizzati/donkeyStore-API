const Product = require('./Product.model')

async function getProducts(req, res){
    const products = await Product.find(req.query)
    try{ 
        res.json(products)
    }catch(err){
        console.log(err)
        res.json({msg:"Ocorreu um erro"})
    }
}

module.exports = getProducts