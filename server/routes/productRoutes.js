import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @description: get all products
// @route: GET: /api/products
// @access: public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const product = await Product.find({})
    res.json(products)
  })
)

// @description: get single product
// @route: GET: /api/product/:id
// @access: public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById((p) => p._id === req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default router
