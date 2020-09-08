import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ReactComponent as Plus } from '../icons/plus.svg'

export default function Detail({
  title,
  content = 'If you are reading this, something must have gone wrong',
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
      <Title onClick={toggleDetail}>
        <PlusStyled />
        <H3>{title}</H3>
      </Title>
      <Body isExpanded={isExpanded}>{content}</Body>
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
  margin: 10px;
  cursor: pointer;
`
const Title = styled.section`
  display: flex;
  align-items: center;
`
const Body = styled.p`
  font-size: 110%;
  margin: 10px;
  display: ${(props) => (props.isExpanded ? 'block' : 'none')};
`
const H3 = styled.h3`
  font-weight: 300;
  font-size: 170%;
  padding: 5px 10px 5px 5px;
  margin: 0;
  white-space: nowrap;
`
