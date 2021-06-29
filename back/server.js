const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/forms-builder';//'mongodb://localhost:27017/task_back'

const api = require('./routes/api');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/user', api);

const start = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log("Server running on localhost:" + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
