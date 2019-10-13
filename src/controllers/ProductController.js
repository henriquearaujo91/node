const mongoose = require("mongoose");
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    },

    async show(req, res) {
        const products = await Product.findById(req.params.id);
        return res.json(products);
    },

    async store(req, res) {
        const products = await Product.create(req.body);
        return res.json(products);
    },

    async update(req, res) {
        const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            useFindAndModify: false
        });
        return res.json(products);
    }
};