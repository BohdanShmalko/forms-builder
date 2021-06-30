const jwt = require('jsonwebtoken');
const SECRET_KEY = "this is my cool secret key"

module.exports = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).send({message : 'Unauthorized request'})
    }
    let token = req.headers.authorization.split(' ')[1]

    if(!token) {
        return res.status(401).send({message : 'Unauthorized request'})
    }
    try{
        let payload = jwt.verify(token, SECRET_KEY)
        if(!payload) {
            return res.status(401).send({message : 'Unauthorized request'})
        }
        req.userId = payload.subject
        next()
    }catch (err) {
        return res.status(401).send({message : 'Unauthorized request'})
    }

}