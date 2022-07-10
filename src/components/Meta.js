import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'airSpace Next Shop',
  description: 'Get the Aviation Deals On The Go',
  keywords: 'airbus, boeing, aviation, deals, shop, next, airspace',
}

export default Meta
