import express from 'express';
import ProductsController from '../controllers/products.js';
import Product from '../models/products.js';

const router = express.Router();
const productsController = new ProductsController(Product);

router.get('/', (req, res) => {
  productsController.get(req, res);
});

export default router;