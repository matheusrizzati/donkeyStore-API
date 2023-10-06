const Category = require('./Category.model')

async function createCategory(req, res){
    const {name, storeId} = req.body
    if(!name){
        res.json({msg:"Preencha todos os dados"})
    }
    const category = new Category({ 
        name, storeId
    })

    try{
        await category.save()
        res.json({"msg":"Categoria criado com sucesso", category})
    }catch(err){
        console.log(err)
        res.json({"msg":"Ocorreu um erro"})
    }
}

module.exports = createCategory