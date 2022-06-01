import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../Product'

const LatestProducts = () => {
  const productList = useSelector((state) => state.productList)
  const { products } = productList

  return (
    <Row>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={3} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default LatestProducts
