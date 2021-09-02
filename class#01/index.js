const express = require('express');
const bd = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
let authModel = require('./authschema');
const { response } = require('express');

const app = express();
const port = 5;

app.use(cors());
app.use(bd.urlencoded({ extended: false }));
app.use(bd.json());
mongoose.connect('mongodb+srv://awais:awais123456789@cluster0.namyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("Database Connection");
})

mongoose.connection.on("error", () => {
    console.log("Database not connected")
})


app.get('/', (req, res) => {
    res.send('Welcome to first API');
})

app.post('/signup', (req, res) => {
    // res.send('signup')
    let userCreate = authModel({ email: req.body.email, password: req.body.password });

    userCreate.save()
        .then((response) => {
            // console.log(response, "response success");
            res.status(200).send({result: response, message: "Data Stored Succesfully"});
        })
        .catch((ere) => {
            // console.log(err, "error");
            res.status(400).send({result: err.message, message: "Data is not Stored"});
        })
})

app.listen(port, () => {
    console.log("Server is running");
})