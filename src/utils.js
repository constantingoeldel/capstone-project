import fuzzysearch from 'fuzzysearch'

export function sortByTags(selectedTags = [], source) {
  const projects = source
    .map((item) => {
      item.tags.map((tag) => (tag.applies = selectedTags.includes(tag.text)))
      return item
    })
    .sort(
      (firstProject, secondProject) =>
        secondProject.tags.filter((tag) => tag.applies).length -
        firstProject.tags.filter((tag) => tag.applies).length
    )
  return projects
}

export function filterBySearch(
  event = { target: { value: '' } },
  source = { projects: [{ title: '', country: '', description: '' }] }
) {
  return source.projects.filter(
    (project) =>
      fuzzysearch(event.target.value, project.title) ||
      fuzzysearch(event.target.value, project.country) ||
      fuzzysearch(event.target.value, project.description)
  )
}
