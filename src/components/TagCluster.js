import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tag from './Tag'

export default function TagCluster({ tags, onTagClick }) {
  return (
    <TagList>
      {tags.map((tag, index) => (
        <Tag
          key={tag.text}
          text={tag.text}
          applies={tag.applies}
          onClick={() => onTagClick(tag, index)}
        />
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
  & > li.active {
    background-color: #1b998b;
  }
`
