const express = require (`express`);
const cors = require (`cors`);
const bodyParser= require (`body-parser`);
const mongoose = require (`mongoose`);

//created server
const app = express();
console.log("hello world");
// use middlewares 

app.unsubscribe(cors());
app.use(bodyParser.json());

//mongodb url 

const dbURL = ""