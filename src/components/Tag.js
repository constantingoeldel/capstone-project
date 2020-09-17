import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { animated, useSpring, config } from 'react-spring'

export default function Tag({ background, text, applies, onClick = () => {} }) {
  const changeBackground = useSpring({
    config: config.wobbly,
    backgroundColor: applies ? background.active : background.inactive,
    opacity: applies ? background.opacityActive : background.opacityInactive,
  })
  return (
    <TagStyled style={changeBackground} onClick={onClick}>
      {text}
    </TagStyled>
  )
}
Tag.propTypes = {
  tag: PropTypes.shape({ text: PropTypes.string.isRequired, applies: PropTypes.bool.isRequired }),
  onClick: PropTypes.func,
}
const TagStyled = styled(animated.li)`
  display: inline-block;
  white-space: nowrap;
  color: white;
  margin: 4px 5px;
  text-decoration: none;
  padding: 12px;
  border-radius: 30px;
`
