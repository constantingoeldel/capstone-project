import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
}
export default function Navigation({ onClick }) {
  return (
    <NavStyled onClick={onClick}>
      <LinkStyled to='/'>Dashboard</LinkStyled>
      <LinkStyled to='/opportunities'>Opportunities</LinkStyled>
      <LinkStyled to='/my-projects'>My Projects</LinkStyled>
      <LinkStyled to='/create'>Initiate a Project</LinkStyled>
    </NavStyled>
  )
}
const NavStyled = styled.nav`
  margin-top: 30px;
  padding: 20px;
`
const LinkStyled = styled(Link)`
  display: block;
  font-weight: 550;
  font-size: 125%;
  color: rgb(1, 25, 54);
  text-decoration: none;
  padding: 13px;
  &:visited {
    text-decoration: none;
    color: rgb(1, 25, 54);
  }
`
