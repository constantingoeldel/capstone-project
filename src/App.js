import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable/'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

import Opportunities from './components/Pages/Opportunities/Opportunities'
import Navigation from './components/Navigation/Navigation'
import CreateProject from './components/Pages/Create/CreateProject'
import UserProjects from './components/Pages/UserProjects/UserProjects'
import Dashboard from './components/Pages/Dashboard/Dashboard'

import useNavigationSwipe from './hooks/useNavigationSwipe'

export default function App() {
  const [isNavigationVisible, setNavigationsVisible, swipe] = useNavigationSwipe()
  const slide = useSpring({
    top: isNavigationVisible ? '100px' : '0px',
    left: isNavigationVisible ? '250px' : '0px',
  })
  return (
    <div {...swipe}>
      <Router>
        {isNavigationVisible && <Navigation onClick={() => setNavigationsVisible(false)} />}
        <ContentPlacementStyled
          visible={isNavigationVisible ? 1 : 0}
          style={slide}
          onClick={() => setNavigationsVisible(false)}
        >
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
const ContentPlacementStyled = styled(animated.div)`
  position: ${(props) => (props.visible ? 'fixed' : 'static')};
  box-shadow: ${(props) => (props.visible ? '0 3px 20px rgba(1, 25, 54, 0.4)' : 'none')};
  border-radius: 15px;
  margin: 0;
  padding: 0;
  min-height: 100vh;
`
