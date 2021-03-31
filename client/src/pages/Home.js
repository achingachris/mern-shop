import { Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Meta from '../components/Meta'

import products from '../products'
import Product from '../components/Product'

const Home = () => {
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