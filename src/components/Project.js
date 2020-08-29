import React from 'react'
import styled from 'styled-components/macro'
import ProjectHeadline from './ProjectHeadline'

export default function Project({ title, country, description, image }) {
  return (
    <Card>
      <Img alt='' src={image ?? 'https://source.unsplash.com/random'}></Img>
      <ProjectHeadline title={title} country={country} />
      <Description>{description}</Description>
    </Card>
  )
}

const Card = styled.section`
  margin: 20px;
  box-shadow: 0 5px 10px rgba(27, 153, 139, 0.58);
  border-radius: 42px;
`
const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 42px 42px 0 0;
`
const Description = styled.p`
  font-weight: 300;
  padding: 10px 10px 20px 20px;
  margin: 0;
`
