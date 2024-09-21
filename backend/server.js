import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

const app = express()
dotenv.config()

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/product/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server is now running on port 5000'))