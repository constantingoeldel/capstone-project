import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tag from './Tag'

export default function TagCluster({ tags, onTagClick }) {
  return (
    <TagList>
      {tags.map((tag) => (
        <Tag key={tag.text} tag={tag} onClick={onTagClick} />
      ))}
    </TagList>
  )
}

TagCluster.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      applies: PropTypes.bool.isRequired,
    })
  ),
  onTagClick: PropTypes.func,
}

const TagList = styled.ul`
  padding: 10px;
  & > li .active {
    background-color: #1b998b;
  }
`
