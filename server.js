const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();
// Permitir envio do formato json para a aplicação
app.use(express.json());

// Iniciando o DB
const uri = "mongodb://192.168.0.102:27017/nodeapi";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
mongoose.set('useFindAndModify', false);
mongoose.connect(uri, options);
requireDir("./src/models");


// rotas
app.use("/api", require("./src/routes"));

app.listen(3001);