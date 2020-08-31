import React from 'react'
import Project from './components/Project'
import mockData from './db.json'
import TagCluster from './components/TagCluster'
function App() {
  return (
    <>
      <TagCluster tags={mockData.tags} />
      {mockData.projects.map((project, index) => (
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
