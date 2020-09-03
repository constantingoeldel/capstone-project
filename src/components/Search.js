import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Search({ onSearch }) {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Input name='input' placeholder='Search for Projects' onChange={onSearch} />
      <Button type='button' onClick={resetInput}>
        Clear
      </Button>
    </Form>
  )
  function resetInput(event) {
    event.target.form.input.value = ''
    onSearch({
      target: {
        value: '',
      },
    })
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
}
const Form = styled.form`
  box-shadow: 0 5px 10px rgba(27, 153, 139, 0.58);
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  margin: 20px 10%;
  display: flex;
  justify-content: space-between;
`
const Input = styled.input`
  font-size: 120%;
  border: 0;
  outline: 0;
  border-radius: 5em;
  box-sizing: border-box;
  width: 70%;
`
const Button = styled.button`
  background-color: #1b998b;
  border: 0;
  outline: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: white;
  font-size: 110%;
  padding: 8px 10px;
`
