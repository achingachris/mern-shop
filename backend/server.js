import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDb from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDb()

const app = express()

app.get('/', (req, res) => {
  res.send('API is runnning')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 8000

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
)
