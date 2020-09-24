import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Contributors({ contributors }) {
  return (
    <ImageList>
      {contributors.map((contributor) => (
        <React.Fragment key={contributor.name}>
          <Img alt={contributor.name} src={contributor.picture ?? '/images/picture-missing.jpg'} />
          <Name>{contributor.name.split(' ')[0]}</Name>
        </React.Fragment>
      ))}
    </ImageList>
  )
}
Contributors.propTypes = {
  contributors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    })
  ),
}

const ImageList = styled.section`
  display: grid;
  margin: 10px 0 0 5px;
  overflow: scroll;
`
const Img = styled.img`
  grid-row: 1;
  object-fit: cover;
  margin: 7px;
  height: 50px;
  width: 50px;
  justify-self: center;
  align-self: center;
  border-radius: 50px;
`
const Name = styled.p`
  margin-top: 0;
  font-size: 70%;
  grid-row: 2;
  font-weight: 100;
  justify-self: center;
  align-self: center;
  text-align: center;
`
