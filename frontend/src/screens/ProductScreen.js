import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchproduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)

      setProduct(data)
    }

    fetchproduct()
  }, [])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Availabilty:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'Available' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                  <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                      Add to cart
                  </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
