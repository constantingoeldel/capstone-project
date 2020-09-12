import React, { useState, useEffect } from 'react'
import Project from './components/Project'
import TagCluster from './components/TagCluster'
import { sortByTags, filterBySearch } from './utils'
import Search from './components/Search'
// import Counter from './components/Counter'
import Overlay from './components/Overlay'

export default function App() {
  const [tags, setTags] = useState(null)
  const [projects, setProjects] = useState(null)
  const [searchTerm, setSearchTerm] = useState(null)

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
  //testen!
  useEffect(
    () =>
      setProjects(
        tags &&
          projects &&
          sortByTags(
            tags.filter((tag) => tag.applies).map((tag) => tag.text),
            projects
          )
      ),
    [tags]
  )
  useEffect(() => setProjects(searchTerm && projects && filterBySearch(searchTerm, projects)), [
    searchTerm,
  ])
  return (
    <>
      <Search onSearch={onSearch} />
      {tags && <TagCluster tags={tags} onTagClick={onTagClick} />}
      {projects &&
        projects
          .filter((project) => project.accordingToSearchTerms)
          .slice(0, 20)
          .map((project, index) => (
            <Project
              key={project._id}
              project={project}
              onClick={() => toggleDetailOverlay(project, index)}
            />
          ))}
      {projects &&
        projects.map(
          (project, index) =>
            project.expanded && (
              <Overlay project={project} onBack={() => toggleDetailOverlay(project, index)} />
            )
        )}
    </>
  )
  // Mehr Anzeigen button einbauen
  function toggleDetailOverlay(project, index) {
    setProjects([
      ...projects.slice(0, index),
      { ...project, expanded: !project.expanded },
      ...projects.slice(index + 1),
    ])
    document.body.classList.toggle('overlay')
  }
  function onTagClick(tag, index) {
    setTags([
      ...tags.slice(0, index),
      { text: tag.text, applies: !tag.applies },
      ...tags.slice(index + 1),
    ])
  }
  function onSearch(event) {
    setSearchTerm(event.target.value)
    console.log('search', searchTerm)
  }
}
