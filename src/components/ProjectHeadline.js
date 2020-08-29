import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ProjectHeadline({ title, country }) {
  return (
    <Headline>
      <H3>
        {country} | {title}
      </H3>
    </Headline>
  )
}
ProjectHeadline.propTypes = {
  title: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
}
const Headline = styled.section`
  display: flex;
`
const H3 = styled.h3`
  font-weight: 300;
  font-size: 170%;
  padding: 10px 10px 5px 15px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
