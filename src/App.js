import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components/macro'

import Opportunities from './Opportunities/Opportunities'
import Navigation from './Navigation/Navigation'
import CreateProject from './Create/CreateProject'
import UserProjects from './UserProjects/UserProjects'
import Dashboard from './Dashboard/Dashboard'

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
        {isNavigationVisible && <Title>UNFINISHED</Title>}
        {isNavigationVisible && <Navigation onClick={() => setNavigationsVisible(false)} />}
        <ContentPlacementStyled
          visible={isNavigationVisible ? 1 : 0}
          style={slide}
          onClick={() => isNavigationVisible && setNavigationsVisible(false)}
        >
          <Switch>
            <Route path='/opportunities'>
              <Opportunities onBack={() => setNavigationsVisible(true)} />
            </Route>
            <Route path='/create'>
              <CreateProject onBack={() => setNavigationsVisible(true)} />
            </Route>
            <Route path='/my-projects'>
              <UserProjects onBack={() => setNavigationsVisible(true)} />
            </Route>
            <Route path='/'>
              <Dashboard onBack={() => setNavigationsVisible(true)} />
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
const Title = styled.h1`
  font-family: 'Title';
  margin: 30px;
  font-size: 220%;
`
