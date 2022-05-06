import mongoose from 'mongoose'


const connectDB = async () => {
  try {
    //const conn = await mongoose.connect(process.env.MONGO_URI, {
    const conn=await mongoose.connect(
        `mongodb+srv://DevJoshua:Joshua@swahilipothub.f8p1u.mongodb.net/SwahilipotHub?
        retryWrites=true&w=majority`,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
