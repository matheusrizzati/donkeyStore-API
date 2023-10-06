const Product = require('./Product.model')

async function createProduct(req, res){
    let {name, price, limited, quantity, category, isActive, storeId} = req.body
    if(!name || !price || !category){
        res.json({msg:"Preencha todos os dados"})
    }
    
    if (!limited) {
        quantity = null
    }

    const product = new Product({ 
        name, price, limited, quantity, category, isActive, storeId          
    })

    try{
        await product.save()
        res.json({"msg":"Produto criado com sucesso", product})
    }catch(err){
        console.log(err)
        res.json({"msg":"Ocorreu um erro"})
    }
}

module.exports = createProduct