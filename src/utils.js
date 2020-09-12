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
    item.accordingToSearchTerms =
      fuzzysearch(searchTerm, item.title) ||
      fuzzysearch(searchTerm, item.description) ||
      fuzzysearch(searchTerm, item.location.country) ||
      fuzzysearch(searchTerm, item.location.city) ||
      fuzzysearch(searchTerm, item.location.countrycode) ||
      console.log(item)
    return item
  })
  return projects
}
