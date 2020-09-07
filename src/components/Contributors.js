import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Contributors({ contributors }) {
  return (
    <ImageList>
      {contributors.map((contributor, index) => (
        <Img key={index} alt={contributor.name} src={contributor.picture} />
      ))}
    </ImageList>
  )
}
const ImageList = styled.section`
  display: flex;
  overflow: scroll;
`
const Img = styled.img`
  object-fit: cover;
  margin: 7px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
`
