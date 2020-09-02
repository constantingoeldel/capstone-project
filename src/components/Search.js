import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Search({ onSearch }) {
  return <Input placeholder='Search for Projects' onChange={onSearch} />
}

const Input = styled.input``
