import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Counter({ firstInt, secondInt }) {
  return (
    <Count>
      {firstInt} out of {secondInt} Projects fit your search
    </Count>
  )
}
Counter.propTypes = {
  firstInt: PropTypes.number.isRequired,
  secondInt: PropTypes.number.isRequired,
}

const Count = styled.p`
  margin-left: 20px;
  padding-top: 10px;
`
