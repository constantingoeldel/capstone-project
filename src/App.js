import React, { useState, useEffect } from 'react'
import Project from './components/Project'
import mockData from './db.json'
import TagCluster from './components/TagCluster'
function App() {
  const [selectedTags, setSelectedTags] = useState([])
  const [projects, setProjects] = useState(mockData.projects)
  useEffect(() => {
    console.log('call')
    filterProjects()

    function filterProjects() {
      console.log('called', selectedTags)
      projects.forEach((project) => {
        selectedTags.forEach((tag) => {
          return project === tag && project.applyingTags ? project.applyingTags++ : 1
        })
      })
      projects.sort(
        (firstProject, secondProject) => firstProject.applyingTags - secondProject.applyingTags
      )
    }
  }, [selectedTags])
  return (
    <>
      <TagCluster tags={mockData.tags} onTagClick={onTagClick} />
      {projects.map((project, index) => (
        <Project
          key={index}
          tags={project.tags}
          title={project.title}
          country={project.country}
          description={project.description}
          image={project.image}
        />
      ))}
    </>
  )
  function onTagClick(tag) {
    let set = new Set(selectedTags)
    set = set.delete(tag) ? set : set.add(tag)
    setSelectedTags([...set])
    console.log('changed', selectedTags)
  }
}

export default App
//selectedTags.delete(tag) ? selectedTags : selectedTags.add(tag)
