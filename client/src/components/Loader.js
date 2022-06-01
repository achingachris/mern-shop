import React from 'react'
// import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <button className='btn btn-primary' type='button' disabled=''>
      <span
        className='spinner-grow spinner-grow-sm'
        role='status'
        aria-hidden='true'
      />
      Loading...
    </button>
  )
}

export default Loader
