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

export function filterBySearch(searchTerm, source) {
  const projects = source.map((item) => {
    item.accordingToSearchTerms = fuzzysearch(searchTerm, item.title)
    // fuzzysearch(searchTerm, project.description) ||
    // fuzzysearch(searchTerm, project.location.country) ||
    // fuzzysearch(searchTerm, project.location.city) ||
    // fuzzysearch(searchTerm, project.location.countrycode) ||
    // fuzzysearch(searchTerm, project.details.mission)
    return item
  })
  return projects
}
