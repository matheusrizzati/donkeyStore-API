const Product = require('./Product.model')

async function createProduct(req, res){
    let {name, price, limited, quantity, category, isActive, storeId} = req.body
    let image = req.file.location
    if(!name || !price || !category){
        return res.json({msg:"Preencha todos os dados"})
    }
    
    if (quantity === "null")
        quantity = null
    if (!limited) {
        quantity = null
    }

    const product = new Product({ 
        name, price, limited, quantity, category, isActive, image, storeId          
    })

    try{
        await product.save()
        return res.json({"msg":"Produto criado com sucesso", product})
    }catch(err){
        console.log(err)
        return res.json({"msg":"Ocorreu um erro"})
    }
}

module.exports = createProduct