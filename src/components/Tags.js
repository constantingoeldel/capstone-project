import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useSpring, animated, config } from 'react-spring'

export default function Tags({ content, onClick, isSelected }) {
  const colorAnimation = useSpring({
    backgroundColor: isSelected ? `#1B998B` : `#2e2e3a`,
    config: config.wobbly,
  })
  console.log('rendered')
  return (
    <Tag style={colorAnimation} onClick={onClick}>
      {content}
    </Tag>
  )
}
Tags.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
const Tag = styled(animated.li)`
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
