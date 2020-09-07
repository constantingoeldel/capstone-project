import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Tags from './Tags'
import { ReactComponent as Arrow } from '../icons/back-arrow.svg'
import { ReactComponent as Share } from '../icons/share.svg'
import Contributors from './Contributors'
import Detail from './Detail'

export default function DetailOverlay({ project, onBack }) {
  return (
    <Overlay>
      <Headline>
        <ArrowStyled onClick={onBack} />
        <H3>{project.title}</H3>
        <ShareStyled />
      </Headline>
      <Img alt='' src={project.image ?? 'https://source.unsplash.com/random'}></Img>
      <TagList>
        {project.tags.map((tag, index) => (
          <Tags content={tag} key={index} />
        ))}
      </TagList>

      <Contributors contributors={project.contributors} />
      <Detail title='Mission' content={project.mission} />
      <Detail title='About' content={project.about} />
      <Detail title='Updates' content={project.updates} />
      <Detail title='Comments' content={project.comments} />
    </Overlay>
  )
}

DetailOverlay.propTypes = {
  project: PropTypes.shape({
    tags: PropTypes.array.isRequired,
    country: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    mission: PropTypes.object.isRequired,
    about: PropTypes.object.isRequired,
    updates: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
  }),
}
const Overlay = styled.section`
  position: fixed;
  overflow-y: scroll;
  top: 20px;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  background-color: white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 -1px 10px rgba(46, 46, 58, 0.5);
  padding: 10px;
`
const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
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
const Headline = styled.section`
  display: flex;
  z-z-index: 200;
  justify-content: space-between;
`
const H3 = styled.h3`
  font-weight: 300;
  font-size: 170%;
  padding: 5px 10px 5px 15px;
  margin: 0;
  white-space: nowrap;
`
const ArrowStyled = styled(Arrow)`
  margin: 10px;
  cursor: pointer;
`
const ShareStyled = styled(Share)`
  margin: 10px;
  cursor: pointer;
`
