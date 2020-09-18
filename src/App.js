import React, { useState, useEffect } from 'react'
import Project from './components/Project'
import TagCluster from './components/TagCluster'
import { sortByTags, filterBySearch } from './utils'
import Search from './components/Search'
import Overlay from './components/Overlay'
import styled from 'styled-components'

export default function App() {
  const [tags, setTags] = useState(null)
  const [projects, setProjects] = useState(null)
  const [searchTerm, setSearchTerm] = useState()
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    fetch('https://unfinished-api.herokuapp.com/api/projects')
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((projects) => setProjects(projects))
    fetch('https://unfinished-api.herokuapp.com/api/tags')
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((tags) => setTags(tags))
  }, [])
  useEffect(
    () =>
      setProjects(
        (projects) =>
          tags &&
          projects &&
          sortByTags(
            tags.filter((tag) => tag.applies).map((tag) => tag.text),
            projects
          )
      ),
    [tags]
  )
  useEffect(
    () => setProjects((projects) => searchTerm && projects && filterBySearch(searchTerm, projects)),
    [searchTerm]
  )
  return (
    <>
      <Search onSearch={onSearch} />
      <StyledExplanation>
        {projects &&
          projects.filter(
            (project) =>
              project.accordingToSearchTerms || project.accordingToSearchTerms === undefined
          ).length}{' '}
        out of {projects && projects.length} Projects fit your search! You can search for a projects
        title, country, countrycode, city or description. Searchterms are case-sensitive and can
        omit characters. When tags are selected, results are shown in order of relevance. Tags and
        search can be used in combination.
      </StyledExplanation>
      {tags && <TagCluster tags={tags} onTagClick={onTagClick} />}
      {projects &&
        projects
          .filter((project) => project.accordingToSearchTerms ?? project)
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
              <Overlay
                key={project._id}
                project={project}
                onBack={() => toggleDetailOverlay(project, index)}
              />
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
    !document.body.classList.contains('overlay') && setScrollPosition(window.scrollY)
    document.body.classList.toggle('overlay')
    window.scroll({ top: scrollPosition, left: 0, behavior: 'smooth' })
  }
  function onTagClick(tag, index) {
    setTags([
      ...tags.slice(0, index),
      { text: tag.text, applies: !tag.applies },
      ...tags.slice(index + 1),
    ])
  }
  function onSearch(event) {
    setSearchTerm(event.target.value || ' ')
  }
}

const StyledExplanation = styled.p`
  margin: 20px;
  color: darkgrey;
  font-size: 80%;
  text-align: center;
`
