import React from 'react'
import styled from 'styled-components/macro'

export default function ProjectHeadline({ title, country }) {
  return (
    <Headline>
      <H3>
        {title} | {country}
      </H3>
    </Headline>
  )
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
