import { Form, FormControl, Container, Button } from 'react-bootstrap'
import React, { useState } from 'react'

const SearchBar = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <Container className='mb-3 mt-3'>
      <Form onSubmit={submitHandler} className='d-flex'>
        <FormControl
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
          className='me-2'
        ></FormControl>
        <Button type='submit' variant='outline-success' className='p-2'>
          Search
        </Button>
      </Form>
    </Container>
  )
}

export default SearchBar
