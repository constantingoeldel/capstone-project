import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Opportunities from './components/Opportunities'
import Navigation from './components/Navigation'
import CreateProject from './components/CreateProject'
import UserProjects from './components/UserProjects'
import Dashboard from './components/Dashboard'
import { useSwipeable } from 'react-swipeable/'
import useNavigationSwipe from './hooks/useNavigationSwipe'

export default function App() {
  const [isNavigationVisible, swipe] = useNavigationSwipe()

  return (
    <div {...swipe}>
      <Router>
        {isNavigationVisible && <Navigation />}
        <ContentPlacementStyled active={isNavigationVisible}>
          <Switch>
            <Route path='/opportunities'>
              <Opportunities />
            </Route>
            <Route path='/create'>
              <CreateProject />
            </Route>
            <Route path='/my-projects'>
              <UserProjects />
            </Route>
            <Route path='/'>
              <Dashboard />
            </Route>
          </Switch>
        </ContentPlacementStyled>
      </Router>
    </div>
  )
}
const ContentPlacementStyled = styled.div`
  position: ${(props) => (props.active ? 'fixed' : 'static')};
  box-shadow: ${(props) => (props.active ? '0 3px 20px rgba(1, 25, 54, 0.4)' : 'none')};
  top: 100px;
  left: 250px;
  border-radius: 5px;
  margin: 0;
  padding: 0;
  min-height: 100vh;
`
