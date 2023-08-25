const getAllProductsStatic = (req, res) => {
    throw new Error("thats bad ");
    res.status(200).json({ msg: "testing route" });
};
const getAllProducts = (req, res) => {
    res.status(200).json({ msg: " route" });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic
};
