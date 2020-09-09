import fuzzysearch from 'fuzzysearch'

export function sortByTags(tags = [], source = [{}]) {
  const selectedTags = tags.map((tag) => tag.selected && tag.text)
  const projects = source
    .map((project) => {
      project.applyingTags = project.tags.filter((projectTag) => selectedTags.includes(projectTag))
      return project
    })
    .filter(
      (project) => tags.map((tag) => tag.selected).length === 0 || project.applyingTags.length > 0
    )
    .sort(
      (firstProject, secondProject) =>
        secondProject.applyingTags.length - firstProject.applyingTags.length
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
