import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Col,Row} from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const productList = useSelector((state) => state.productList)
  const {loading, products, error} = productList

  return (
    <>
      <h1>Latest Products</h1>
      {
        loading ? (<Loader />) :
        error ? (<Message variant='danger'>{error}</Message>) :
          (<Row>
          {products.map(p => (
            <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={p} />
            </Col>
          ))}
        </Row>)
      }
      
    </>
  )
}

export default HomeScreen