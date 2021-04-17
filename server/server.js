import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

// product routes
app.use('api/products', productRoutes)

const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV

app.listen(PORT, console.log(`Server Running in ${MODE} mode on port ${PORT}`.orange))
