const Product = require('../models/products.model.js');

const getProducts = async(req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: error.message });
    }
}
const craeteProduct = async(req,res) =>{
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: error.message });
    }
}
const getProductbyId = async(req,res) =>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: error.message });
    }
}
const updateProductById = async(req,res) =>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);

        if(!product) return res.status(404).json({message: 'product not found'});

        res.status(200).json(req);
    }
    catch(error)
    {
        res.status(500).json({message : 'product Id invalid'})
    }
}
const deleteProductbyId = async(req,res) =>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: error.message });
    }
}
module.exports ={
    getProducts,
    getProductbyId,
    updateProductById,
    deleteProductbyId,
    craeteProduct
};