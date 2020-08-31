import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tags from './Tags'

export default function TagCluster({ tags }) {
  return (
    <TagList>
      {tags.map((tag, index) => (
        <Tags key={index} content={tag} onClick={selectTag} />
      ))}
    </TagList>
  )
  function selectTag(event, tag) {
    console.log(event.target)
    event.target.classList.toggle('active')
  }
}

TagCluster.propTypes = {
  tags: PropTypes.array.isRequired,
}

const TagList = styled.ul`
  padding: 10px;
`
