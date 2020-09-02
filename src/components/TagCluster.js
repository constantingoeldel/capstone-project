import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tags from './Tags'

export default function TagCluster({ tags, onTagClick }) {
  return (
    <TagList>
      {tags.map((tag, index) => (
        <Tags key={index} content={tag} onClick={selectTag} />
      ))}
    </TagList>
  )
  function selectTag(event, tag) {
    event.target.classList.toggle('active')
    onTagClick(tag)
  }
}

TagCluster.propTypes = {
  tags: PropTypes.array.isRequired,
  onTagClick: PropTypes.func,
}

const TagList = styled.ul`
  padding: 10px;
`
