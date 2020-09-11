import React, { useState, useEffect } from 'react'
import Project from './components/Project'
import mockData from './db.json'
import TagCluster from './components/TagCluster'
import { sortByTags, filterBySearch } from './utils'
import Search from './components/Search'
import Counter from './components/Counter'
import Overlay from './components/Overlay'

export default function App() {
  const [tags, setTags] = useState(null)
  const [projects, setProjects] = useState(null)
  const [searchTerm, setSearchTerm] = useState(mockData.projects)
  const [detailedProject, setDetailedProject] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/projects')
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((projects) => setProjects(projects))
    fetch('http://localhost:4000/api/tags')
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((tags) => setTags(tags))
  }, [])

  // useEffect(() => {
  //   setProjects(sortByTags(selectedTags, searchTerm))
  // }, [selectedTags, searchTerm])

  return (
    <>
      {detailedProject && <Overlay project={detailedProject} onBack={toggleDetailOverlay} />}
      <Search onSearch={onSearch} />
      {projects && <Counter firstInt={projects.length} secondInt={mockData.projects.length} />}
      {projects && <TagCluster tags={tags} /*onTagClick={onTagClick}*/ />}
      {projects &&
        projects.map((project) => (
          <Project key={project._id} project={project} onClick={toggleDetailOverlay} />
        ))}
    </>
  )

  function toggleDetailOverlay(project) {
    setDetailedProject(detailedProject ? null : project)
    document.body.classList.toggle('overlay')
  }
  // function onTagClick(tag) {
  //   let set = new Set(selectedTags)
  //   set = set.delete(tag) ? set : set.add(tag)
  //   setSelectedTags([...set])
  // }
  function onSearch(event) {
    setSearchTerm(filterBySearch(event, mockData))
  }
}
