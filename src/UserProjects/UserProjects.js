import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Project from '../Project/Project'
import Header from '../Header/Header'
import getDBEntries from '../services/getDBEntries'

export default function UserProjects({ onBack }) {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    getDBEntries(process.env.REACT_APP_PROJECTS_URL).then((entries) => setProjects(entries))
  }, [])
  return (
    <>
      <Header title='Your Projects' onBack={onBack} />
      {projects[0] && <Project project={projects[0]} onClick={() => {}} />}
    </>
  )
}
UserProjects.propTypes = {
  onBack: PropTypes.func.isRequired,
}
