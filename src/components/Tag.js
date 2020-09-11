import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Tag({ tag, onClick = () => {} }) {
  return (
    <TagStyled className={tag.applies ? 'active' : null} onClick={onClick}>
      {tag.text}
    </TagStyled>
  )
}
Tag.propTypes = {
  tag: PropTypes.shape({ text: PropTypes.string.isRequired, applies: PropTypes.bool.isRequired }),
  onClick: PropTypes.func,
}
const TagStyled = styled.li`
  display: inline-block;
  white-space: nowrap;
  color: white;
  margin: 4px 5px;
  text-decoration: none;
  padding: 12px;
  border-radius: 30px;
  background-color: #2e2e3a;
`
