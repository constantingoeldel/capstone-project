import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tag from '../Tag/Tag'

export default function TagCluster({ tags, onTagClick }) {
  return (
    <TagList>
      {tags.map((tag, index) => (
        <Tag
          key={tag.text}
          text={tag.text}
          applies={tag.applies}
          onClick={() => onTagClick(tag, index)}
          background={{
            active: '#11dc8b',
            inactive: '#2e2e3a',
            opacityActive: 1,
            opacityInactive: 1,
          }}
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
  @media (min-width: 500px) {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
`
