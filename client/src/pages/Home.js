import {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Meta from '../components/Meta'
import Product from '../components/Product'

const Home = () => {
  const [products,setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  // page content
  const pageTitle = 'Shopper Store'
  const pageDescription = 'The Store With Goods'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
          <Product  product={product} />
        </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home