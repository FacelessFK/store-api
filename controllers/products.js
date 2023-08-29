const Product = require("../models/products");
const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({ price: { $gt: 30 } }).limit(4);
    res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
    const { name, feature, company, sort, fields, numericFilter } = req.query;
    const queryObject = {};
    if (name) queryObject.name = { $regex: name, $options: "i" };
    if (feature) queryObject.feature = feature === "true" ? true : false;
    if (company) queryObject.company = company;
    if (numericFilter) {
        const operatorMap = {
            ">": "$gt",
            ">=": "$gte",
            "=": "$eq",
            "<=": "$lte",
            "<": "$lt"
        };
        const regEx = /\b(<|>|>=|<=|=)\b/g;
        let filters = numericFilter.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        );
        filters = filters.split(",").forEach((item) => {
            const [field, operator, value] = item.split("-");
            const options = ["price", "rating"];
            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) };
            }
        });
    }
    console.log(queryObject);
    let result = Product.find(queryObject);
    if (sort) {
        // console.log(sort.split(",").join(" "));
        result = result.sort(sort.split(",").join(" "));
    } else result = result.sort("createAt");
    if (fields) {
        result = result.select(fields.split(",").join(" "));
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
    const products = await result;
    res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic
};
