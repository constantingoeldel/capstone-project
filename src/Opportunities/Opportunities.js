import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Project from '../Project/Project'
import TagCluster from '../TagCluster/TagCluster'
import { sortByTags, filterBySearch } from '../services/utils'
import Search from '../Search/Search'
import Overlay from '../Project/ProjectOverlay/Overlay'
import Header from '../Header/Header'
import getDBEntries from '../services/getDBEntries'

export default function Opportunities({ onBack }) {
  const [tags, setTags] = useState([])
  const [projects, setProjects] = useState([])
  const [searchTerm, setSearchTerm] = useState(' ')
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentPage, setPage] = useState(1)

  const numFoundProjects = projects?.filter(
    (project) => project.accordingToSearchTerms || project.accordingToSearchTerms === undefined
  ).length

  useEffect(() => {
    getDBEntries(process.env.REACT_APP_PROJECTS_URL).then((entries) => setProjects(entries))
    getDBEntries(process.env.REACT_APP_TAGS_URL).then((entries) => setTags(entries))
  }, [])
  useEffect(
    () =>
      setProjects((projects) =>
        sortByTags(
          tags.filter((tag) => tag.applies).map((tag) => tag.text),
          projects
        )
      ),
    [tags]
  )
  useEffect(() => setProjects((projects) => filterBySearch(searchTerm, projects)), [searchTerm])
  return (
    <>
      <Header title='Opportunities' onBack={onBack} />

      <Search onSearch={onSearch} />
      <StyledExplanation>
        {numFoundProjects} out of {projects.length} Projects fit your search! You can search for a
        projects title, country, countrycode, city or description. Searchterms are case-sensitive
        and can omit characters. When tags are selected, results are shown in order of relevance.
        Tags and search can be used in combination.
      </StyledExplanation>
      {<TagCluster tags={tags} onTagClick={onTagClick} />}
      {projects
        ?.filter((project) => project.accordingToSearchTerms ?? project)
        .slice(0, currentPage * 10)
        .map((project, index) => (
          <Project
            key={project._id}
            project={project}
            onClick={() => toggleDetailOverlay(project, index)}
          />
        ))}
      {projects?.map(
        (project, index) =>
          project.expanded && (
            <Overlay
              key={project._id}
              project={project}
              onBack={() => toggleDetailOverlay(project, index)}
            />
          )
      )}
      <ButtonStyled onClick={() => setPage((p) => p + 1)}>Show more results</ButtonStyled>
    </>
  )
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
    setSearchTerm(event.target.value)
  }
}
Opportunities.propTypes = {
  onBack: PropTypes.func.isRequired,
}

const StyledExplanation = styled.p`
  margin: 20px;
  color: darkgrey;
  font-size: 80%;
  text-align: center;
`
const ButtonStyled = styled.button`
  background-color: #11dc8b;
  border: 0;
  outline: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: white;
  font-size: 140%;

  padding: 8px 10px;
  width: calc(100% - 40px);
  margin: 20px 0 150px 20px;
`
