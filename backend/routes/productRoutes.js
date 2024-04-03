import express from "express";
import Product from "../models/product.js";
import asyncHandler from "../middleware/asyncHandler.js";
import {
    getProducts,
    getProductById,
  } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);

export default router;