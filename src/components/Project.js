import React from 'react'
import styled from 'styled-components/macro'
import ProjectHeadline from './ProjectHeadline'
import PropTypes from 'prop-types'
import Tags from './Tags'

export default function Project({ data }) {
  return (
    <Card>
      <Img alt='' src={data.image ?? 'https://source.unsplash.com/random'}></Img>
      <TagList>
        {data.tags.map((tag, index) => (
          <Tags content={tag} key={index} />
        ))}
      </TagList>
      <ProjectHeadline title={data.title} country={data.country} />
      <Description>{data.description}</Description>
    </Card>
  )
}
Project.propTypes = {
  data: PropTypes.object.isRequired,
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
const TagList = styled.ul`
  display: flex;
  overflow: scroll;
  padding: 0;
  margin: 5px;
  margin-bottom: 0;
  & > li {
    border-radius: 5px;
    font-size: 90%;
    padding: 8px;
    background-color: #1b998b;
    opacity: 0.6;
  }
`
const Description = styled.p`
  font-weight: 300;
  padding: 10px 10px 20px 20px;
  margin: 0;
`
