const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();

// Iniciando o DB
const uri = "mongodb://192.168.0.102:27017/nodeapi";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, options);

requireDir("./src/models");

const Product = mongoose.model('Product');

// Primeira rota
app.get("/", (req, res) => {
    Product.create({
        title: 'Google',
        description: 'Buscador',
        url: 'https://www.google.com/',
    }); 
    return res.send("Chamada a api");
});

app.listen(3001);