import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Tags({ content, onClick }) {
  return <Tag onClick={(event) => onClick(event, content)}>{content}</Tag>
}
Tags.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
const Tag = styled.li`
  display: inline-block;
  white-space: nowrap;
  color: white;
  margin: 4px 5px;
  text-decoration: none;
  padding: 12px;
  border-radius: 30px;
  background-color: #2e2e3a;
  &.active {
    background-color: #1b998b;
  }
`
