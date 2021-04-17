import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    // delete everything before importing
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // add all users
    const createdUsers = await User.insertMany(users)

    // get admin from the users
    const adminUser = createdUsers[0]._id

    // add user admin to all products
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    // add products
    await Product.insertMany(sampleProducts)

    console.log('Data imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // delete everything before importing
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data imported!'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
