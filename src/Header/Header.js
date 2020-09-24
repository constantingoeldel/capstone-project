import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as Arrow } from '../icons/back-arrow.svg'

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
}
export default function Header({ title, onBack }) {
  return (
    <HeaderStyled>
      <ArrowStyled onClick={onBack} />
      <Headline>{title}</Headline>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.header`
  display: flex;
  margin: 10px 0 0 10px;
`
const Headline = styled.h3`
  align-self: center;
  color: rgb(1, 25, 54);
  justify-content: space-evenly;
  font-weight: 550;
  font-size: 170%;
  margin: 0;
  margin-left: 15px;
  padding-top: 3px;
`
const ArrowStyled = styled(Arrow)`
  margin: 18px 15px 15px 18px;
`
