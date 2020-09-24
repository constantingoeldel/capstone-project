import React from 'react'
import styled from 'styled-components/macro'
import ProjectHeadline from './ProjectHeadline/ProjectHeadline'
import PropTypes from 'prop-types'
import Tag from '../Tag/Tag'

export default function Project({ project, onClick }) {
  return (
    <Card onClick={onClick}>
      <Img alt='' src={project.image ?? 'https://source.unsplash.com/random'}></Img>
      <TagList>
        {project.tags.map((tag) => (
          <Tag
            key={tag.text}
            text={tag.text}
            applies={tag.applies}
            background={{
              active: '#11dc8b',
              inactive: '#11dc8b',
              opacityActive: 1,
              opacityInactive: 0.6,
            }}
          />
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
  box-shadow: 0 3px 20px rgba(1, 25, 54, 0.4);
  border-radius: 25px;
`
const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
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
  }
`
const Description = styled.p`
  font-weight: 300;
  padding: 10px 10px 20px 20px;
  margin: 0;
`
