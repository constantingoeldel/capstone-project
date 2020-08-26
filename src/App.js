import React from 'react'
import Project from './Project'
import projectContent from './db.json'

function App() {
  return (
    <>
      {projectContent.projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          country={project.country}
          description={project.description}
          image={project.image}
        />
      ))}
    </>
  )
}

export default App
