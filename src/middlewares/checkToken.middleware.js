const jwt = require('jsonwebtoken')
require('dotenv').config()

function checkToken(req, res, next){
    const token = req.headers["authorization"];

    try{
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.status(403).json({msg:"Ocorreu um erro na verificação do token"})
                return;
            }
            req.id = decoded
            next()
        });
    }catch(err){
        res.json({msg:"Ocorreu um erro"})
    }
}


module.exports = checkToken