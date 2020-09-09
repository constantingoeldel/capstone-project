import React, { useState, useEffect } from 'react'
import Project from './components/Project'
import mockData from './db.json'
import TagCluster from './components/TagCluster'
import { sortByTags, filterBySearch } from './utils'
import Search from './components/Search'
import Counter from './components/Counter'
import Overlay from './components/Overlay'

export default function App() {
  const [tags, setTags] = useState(mockData.tags.map((tag) => ({ text: tag })))
  const [projects, setProjects] = useState(mockData.projects)
  const [searchTerm, setSearchTerm] = useState(mockData.projects)
  const [detailedProject, setDetailedProject] = useState(null)

  // useEffect(() => {
  //   setProjects(sortByTags(tags, searchTerm))
  // }, [tags, searchTerm])

  return (
    <>
      {detailedProject && <Overlay project={detailedProject} onBack={toggleDetailOverlay} />}

      <Search onSearch={onSearch} />
      <Counter firstInt={projects.length} secondInt={mockData.projects.length} />
      <TagCluster tags={tags} onTagClick={onTagClick} />
      {sortByTags(tags, projects).map((project, index) => (
        <Project key={project.title} data={project} onClick={toggleDetailOverlay} />
      ))}
    </>
  )

  function toggleDetailOverlay(project) {
    setDetailedProject(detailedProject ? null : project)
    document.body.classList.toggle('overlay')
  }
  function onTagClick(tag) {
    const index = tags.indexOf(tag)
    setTags([
      ...tags.slice(0, index),
      { ...tag, selected: !tag.selected },
      ...tags.slice(index + 1),
    ])
  }
  function onSearch(event) {
    // statt event direkt event.target.value in Search.js mitgeben
    setSearchTerm(filterBySearch(event, mockData))
  }
}
