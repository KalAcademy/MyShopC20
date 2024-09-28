import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import products from './data/products.js'
import users from './data/users.js'

dotenv.config()
connectDB()

const importData = async () =>{
  try{
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map(product => {
      return {...product, user: adminUser}
    })
    await Product.insertMany(sampleProducts)

    console.log('Data imported!')
    process.exit(1)

  } catch (error){
    console.error(`Error: ${error.message}`)
    process.exit(1)    
  } 
}

const destroyData = async () => {
  try{
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed!')
    process.exit(1)

  } catch (error){
    console.error(`Error: ${error.message}`)
    process.exit(1)    
  } 
}

if (process.argv[2] === '-d'){
  destroyData()
} else {
  importData()
}