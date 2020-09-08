import React, { useState, useEffect } from 'react'
import Project from './components/Project'
import mockData from './db.json'
import TagCluster from './components/TagCluster'
import { sortByTags, filterBySearch } from './utils'
import Search from './components/Search'
import Counter from './components/Counter'
import Overlay from './components/Overlay'

export default function App() {
  const [selectedTags, setSelectedTags] = useState([])
  const [projects, setProjects] = useState([])
  const [searchTerm, setSearchTerm] = useState(mockData.projects)
  const [detailedProject, setDetailedProject] = useState(null)

  useEffect(() => {
    setProjects(sortByTags(selectedTags, searchTerm))
  }, [selectedTags, searchTerm])

  return (
    <>
      {detailedProject && <Overlay project={detailedProject} onBack={toggleDetailOverlay} />}
      <Search onSearch={onSearch} />
      <Counter firstInt={projects.length} secondInt={mockData.projects.length} />
      <TagCluster tags={mockData.tags} onTagClick={onTagClick} />
      {projects.map((project, index) => (
        <Project key={index} data={project} onClick={toggleDetailOverlay} />
      ))}
    </>
  )

  function toggleDetailOverlay(project) {
    setDetailedProject(detailedProject ? null : project)
    document.body.classList.toggle('overlay')
  }
  function onTagClick(tag) {
    let set = new Set(selectedTags)
    set = set.delete(tag) ? set : set.add(tag)
    setSelectedTags([...set])
  }
  function onSearch(event) {
    setSearchTerm(filterBySearch(event, mockData))
  }
}
