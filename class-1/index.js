// Front-End HTML, CSS
// Data-Base FireStore, MongoDB
// Back-End/Server-Side Nodejs, Laraval

// Back-End authenticate request and forward it to DB, DB gives response to backend that transfers data to client (in chunks also)

// NODE JS
// Server side application build on V8 Engine(c++, run browser-Google Chrome, run JV run applications-nodjs)
// Open-Source 
// Cross Platform - Windows, Mac, Linux
// uses  - Mobile, Desktop, Web application, Networking app
// real-time - messanger
// Features
// Fast
// Asynchronous
// Event-Drivent Event-onclick
// Single Thread highly scalable , dont make copies of application
// single-Thread multi tasks on one request

// application goDaddy, McroSoft, PayPal, Uber, Wikipins, Yahoo!
// Large community
// Areas-Perfect technology partener--- I/O, Data Streaming app(chucks), DIRT, json api based app, single page app
// DIRT - Data intensive real time app

// API application programming interface - it's connection between computer and computer programs(DBs), it's type of software interface offering a service to other pieces of software
// APIs - 1:Types -- Restfull, json base, Web,Open,Internal,Partener,Composite Apis

// Restfull APIs-Very popular - it deals json fomat data, benifits - stores data in cashes(local), layered system ,, Client-server architecture, statelessness-no client context is stored on the server b/t requests, cacheability
// 2: Method - work of API(method), CRUD operations(method), Post(add story, add pic, send request to add data, it can also return response), Get(send request to get data), Put(request to edit data), Delete(request to delete data)
// 3: Status - status tells about the type of response, etc 200-Ok, 201-Created, 400-BadRequest, 401-Unathourized


// Hello World
// console.log("hello world!");


// imorting express
const express = require('express');

const app = express();
const port = 50;


app.get('/', (req, res) => {
    res.send('Hello world to first API');
})

app.listen(port, () => {
    console.log('Server is running')
})