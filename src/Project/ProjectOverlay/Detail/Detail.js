import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as Plus } from '../../../icons/plus.svg'
import { useSpring, animated } from 'react-spring'
import { useMeasure } from 'react-use'

export default function Detail({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const [ref, { height }] = useMeasure()
  const rotation = useSpring({ transform: isExpanded ? 'rotate(225deg)' : 'rotate(0deg)' })
  const expansion = useSpring({
    height: isExpanded ? `${contentHeight}px` : '0px',
    opacity: isExpanded ? 1 : 0,
  })

  useEffect(() => {
    setContentHeight(height)
    window.addEventListener('resize', setContentHeight(height))
    return window.removeEventListener('resize', setContentHeight(height))
  }, [height, isExpanded])

  return (
    <>
      <Title onClick={toggleDetail}>
        <animated.div style={rotation}>
          <PlusStyled />
        </animated.div>
        <Headline>{title.charAt(0).toUpperCase() + title.slice(1)}</Headline>
      </Title>
      <animated.div style={expansion}>
        <div ref={ref}>
          <Body>{content}</Body>
        </div>
      </animated.div>
    </>
  )
  function toggleDetail() {
    setIsExpanded(!isExpanded)
  }
}

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
const PlusStyled = styled(Plus)`
  display: flex;
  margin: 12px;
`
const Title = styled.section`
  display: flex;
  align-items: center;
`
const Body = styled.p`
  font-weight: 300;
  padding: 10px 10px 10px 15px;
  margin: 0;
`
const Headline = styled.h3`
  font-weight: 300;
  font-size: 150%;
  padding: 5px 10px 5px 5px;
  margin: 0;
  white-space: nowrap;
`
