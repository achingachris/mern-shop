const express = require('express')
const app = express()
const products = require('./data/products')

app.get('/', (req, res) => {
  res.send('API Successfully running')
})

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Running on port 5000'))
