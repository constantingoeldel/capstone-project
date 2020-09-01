import React, { useState, useEffect } from 'react'
import Project from './components/Project'
import mockData from './db.json'
import TagCluster from './components/TagCluster'
import { sortByTags } from './utils'

export default function App() {
  const [selectedTags, setSelectedTags] = useState([])
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setProjects(sortByTags(selectedTags, mockData.projects))
  }, [selectedTags])

  return (
    <>
      <TagCluster tags={mockData.tags} onTagClick={onTagClick} />
      <p>There are {projects.length} Projects fitting your search</p>
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
    /* Here, I change the stored Array and convert it into a Set to use the delete()
     and add() functionality that comes with a set. Afterwards, it is converted back
     to an array. Originally, I wanted to store `selectedTags` as a Set, but for
     some reason, useEffect does not react to changes in a Set at all. Why is that?
     If I can't fix it, I'll change the Set-Methods to normal Array Methods, but
     I much prefer using a set for its simplicity and semantic methods.*/
    let set = new Set(selectedTags)
    set = set.delete(tag) ? set : set.add(tag)
    setSelectedTags([...set])
  }
}
