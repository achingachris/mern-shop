import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.send('API is runnning')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on ${PORT}`)
)
