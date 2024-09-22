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
    


  } catch (error){
    console.error(`Error: ${error.message}`)
    process.exit(1)    
  }
  

}