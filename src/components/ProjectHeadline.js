import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ProjectHeadline({ title, country }) {
  return (
    <H3>
      {country} | {title}
    </H3>
  )
}
ProjectHeadline.propTypes = {
  title: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
}
const H3 = styled.h3`
  font-weight: 300;
  font-size: 170%;
  padding: 5px 10px 5px 15px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
