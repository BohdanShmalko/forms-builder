const router = require('express').Router();
const jwt = require('jsonwebtoken');

const verifyToken = require('../helpers/verifyTokenMiddleware')
const Users = require('../models/user');

const SECRET_KEY = 'this is my cool secret key'

router.post('/new', async (req, res) => {
    const { login, password } = req.body;
    if (!login || !password) return res.status(400).send({ message: 'Invalid data' });

    //check if login exist
    const existingUser = await Users.findOne({ login })

    if (existingUser !== null) {
        res.status(400).send({ message: 'This login is already registered' });
        return;
    }

    //create new user
    const newUser = new Users({ login, password });

    const {_id} = await newUser.save()
    //generate token
    const payload = {subject: _id};
    const token = jwt.sign(payload, SECRET_KEY);

    //send token
    res.send({token});
})

router.post('/login', async (req, res) => {
    const { login, password } = req.body;
    if (!login || !password) return res.status(400).send({ message: 'Invalid data' });

    //check if login exist
    const existingUser = await Users.findOne({ login })

    if (!existingUser || existingUser.password !== password) {
        return res.status(400).send({ message: 'The login or password is incorrect' });
    }

    //generate token
    const payload = { subject: existingUser._id };
    const token = jwt.sign(payload, SECRET_KEY);

    //send token
    res.send({token});
})

router.get('/getinf', verifyToken, (req, res) => {
    //send data
    res.send({data: { message: 'some user data' }});
})

router.get('/check/token', verifyToken, (req, res) => {
    res.send({ isValidToken: true });
})

module.exports = router;