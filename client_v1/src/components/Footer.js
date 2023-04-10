import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  // get current year
  const year = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; {year} airShop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
