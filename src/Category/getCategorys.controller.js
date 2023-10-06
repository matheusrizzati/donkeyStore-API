const Category = require('./Category.model')

async function getCategorys(req, res){
    const categorys = await Category.find(req.query)
    try{ 
        res.json(categorys)
    }catch(err){
        console.log(err)
        res.json({msg:"Ocorreu um erro"})
    }
}

module.exports = getCategorys