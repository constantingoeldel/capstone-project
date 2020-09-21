import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Project from '../../Project/Project'
import Header from '../../Header/Header'

export default function UserProjects({ onBack }) {
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
      <Header title='Your Projects' onBack={onBack} />
      {projects && <Project project={projects[0]} onClick={() => {}} />}
    </>
  )
}
