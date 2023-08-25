const express = require("express");
const Router = express.Router();
const productCtrl = require("../controllers/products");

Router.route("/").get(productCtrl.getAllProducts);
Router.route("/static").get(productCtrl.getAllProductsStatic);

module.exports = Router;
