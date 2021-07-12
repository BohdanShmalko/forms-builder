const router = require('express').Router();
const jwt = require('jsonwebtoken');

const verifyToken = require('../helpers/verifyTokenMiddleware')
const Users = require('../models/user');

const SECRET_KEY = 'this is my cool secret key'

router.post('/new', async (req, res) => {
    const {login, password} = req.body;
    if (!login || !password) return res.status(400).send({message: 'Invalid data'});

    let hasError = false;

    //check if login exist
    const existingUser = await Users.findOne({login}).catch((e) => {
        console.log(e);
        res.status(500).send({message: 'Server Error'});
    })
    if (hasError) return;

    if (existingUser !== null) {
        res.status(400).send({message: 'This login is already registered'});
        return;
    }

    //create new user
    const newUser = new Users({login, password});

    await newUser.save().then(({_id}) => {
        //generate token
        let payload = {subject: _id};
        let token = jwt.sign(payload, SECRET_KEY);

        //send token
        res.send({token});
    }).catch(e => {
        console.log(e);
        res.status(500).send({message: 'Server Error'});
    })
})

router.post('/login', async (req, res) => {
    const {login, password} = req.body;
    if (!login || !password) return res.status(400).send({message: 'Invalid data'});

    let hasError = false;

    //check if login exist
    const existingUser = await Users.findOne({login}).catch((e) => {
        console.log(e);
        res.status(500).send({message: 'Server Error'});
    })
    if (hasError) return;
    if (!existingUser || existingUser.password !== password) {
        return res.status(400).send({message: 'The login or password is incorrect'});
    }

    //generate token
    let payload = {subject: existingUser._id};
    let token = jwt.sign(payload, SECRET_KEY);

    //send token
    res.send({token});
})

router.get('/getinf', verifyToken, (req, res) => {
    //send data
    res.send({data: {message: 'some user data'}});
})

router.get('/check/token', verifyToken, (req, res) => {
    res.send({isValidToken: true});
})

module.exports = router;