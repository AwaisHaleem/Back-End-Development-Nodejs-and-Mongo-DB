const express = require('express');
const bd = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const { response } = require('express');
const bcrypt = require('bcryptjs');
const mainRout = require('./router/mainRout')
const app = express();
const port = 5;

app.use(cors());
app.use(bd.urlencoded({ extended: false }));
app.use(bd.json());
app.use(mainRout);
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




app.listen(port, () => {
    console.log("Server is running");
})