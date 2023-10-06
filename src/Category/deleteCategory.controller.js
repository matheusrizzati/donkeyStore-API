const Category = require('./Category.model')

async function deleteCategory(req, res){
    const {id} = req.params
    const category = await Category.deleteOne({_id: id})
    try{ 
        res.json({msg:"Categoria deletado com sucesso"})
    }catch(err){
        console.log(err)
        res.json({msg:"Ocorreu um erro"})
    }
}

module.exports = deleteCategory