import express from 'express';
import productRoute from './products.js';

const router = express.Router();

router.use('/products', productRoute);

router.get('/', (req, res) => {
  res.send('Hello World!');
});

export default router;