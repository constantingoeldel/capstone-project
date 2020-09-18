import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Project from './Project'

export default function Dahboard() {
  const [projects, setProjects] = useState(null)
  //Rework with user-specific fetch
  useEffect(() => {
    fetch('https://unfinished-api.herokuapp.com/api/projects')
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((projects) => setProjects(projects))
  }, [])
  return (
    <>
      <p>Welcome on your Dashboard, User X</p>
      {projects && <Project project={projects[0]} onClick={() => {}} />}
    </>
  )
}
