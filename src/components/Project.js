import React from 'react'
import styled from 'styled-components/macro'
import ProjectHeadline from './ProjectHeadline'
import PropTypes from 'prop-types'
import Tag from './Tag'

export default function Project({ project, onClick }) {
  return (
    <Card onClick={() => onClick(project)}>
      <Img alt='' src={project.image ?? 'https://source.unsplash.com/random'}></Img>
      <TagList>
        {project.tags.map((tag) => (
          <Tag key={tag.text} tag={tag} />
        ))}
      </TagList>
      <ProjectHeadline title={project.title} country={project.location.countrycode} />
      <Description>{project.description}</Description>
    </Card>
  )
}
Project.propTypes = {
  onClick: PropTypes.func.isRequired,
  project: PropTypes.shape({
    tags: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string.isRequired, applies: PropTypes.bool.isRequired })
    ),
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    location: PropTypes.shape({
      country: PropTypes.string.isRequired,
      countrycode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }),
    contributors: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired, picture: PropTypes.string.isRequired })
    ),
    details: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        information: PropTypes.string.isRequired,
      })
    ),
  }),
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
export const TagList = styled.ul`
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
  & > li .active {
    opacity: 1;
  }
`
const Description = styled.p`
  font-weight: 300;
  padding: 10px 10px 20px 20px;
  margin: 0;
`
