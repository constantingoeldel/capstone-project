import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Tag from './Tag'
import { ReactComponent as Arrow } from '../icons/back-arrow.svg'
import { ReactComponent as Share } from '../icons/share.svg'
import Contributors from './Contributors'
import Detail from './Detail'
import { TagList } from './Project'

export default function Overlay({ project, onBack }) {
  return (
    <OverlaySection>
      <Headline>
        <ArrowStyled onClick={onBack} />
        <Title>{project.title}</Title>
        <ShareStyled />
      </Headline>
      <Img alt='' src={project.image ?? 'https://source.unsplash.com/random'}></Img>
      <TagList>
        {project.tags.map((tag) => (
          <Tag text={tag.text} applies={tag.applies} key={tag.text} />
        ))}
      </TagList>
      <Contributors contributors={project.contributors} />
      <Description>{project.description}</Description>
      {project.details.map((detail, index) => (
        <div key={detail.title}>
          <Detail title={detail.title} content={detail.information} />
          {index !== project.details.length - 1 && <Line />}
        </div>
      ))}
      <FollowButton>Support Project</FollowButton>
    </OverlaySection>
  )
}

Overlay.propTypes = {
  onBack: PropTypes.func.isRequired,
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
const OverlaySection = styled.section`
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
  margin-top: 50px;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
`
const Headline = styled.section`
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: white;
  width: 100vw;
  top: 20px;
  z-index: 100;
`
const Title = styled.h3`
  font-weight: 300;
  font-size: 170%;
  padding: 10px 10px 5px 10px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ArrowStyled = styled(Arrow)`
  margin: 15px;
  cursor: pointer;
`
const ShareStyled = styled(Share)`
  margin: 15px;
  width: 25px;
  height: 25px;
  margin-right: 25px;
  cursor: pointer;
`
const Description = styled.p`
  font-weight: 300;
  padding: 10px 10px 20px 15px;
  margin: 0;
`
const Line = styled.hr`
  margin: 9px 15px 9px 15px;
  border-top: 1px solid grey;
  border-bottom: 0px solid grey;
`
const FollowButton = styled.button.attrs((props) => ({ type: 'button' }))`
  background-color: #1b998b;
  border: 0;
  outline: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: white;
  font-size: 140%;

  padding: 8px 10px;
  width: calc(100% - 40px);
  margin: 20px 0 50px 20px;
`
