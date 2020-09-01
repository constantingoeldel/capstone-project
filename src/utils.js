export function sortByTags(tags = [], source = [{}]) {
  let projects = source
    .map((project) => {
      let index = 0
      project.applyingTags = new Set()
      while (index < tags.length) {
        project.tags && project.tags.includes(tags[index]) && project.applyingTags.add(tags[index])
        index++
      }
      return project
    })
    .sort(
      (firstProject, secondProject) =>
        secondProject.applyingTags.size - firstProject.applyingTags.size
    )
    .filter((project) => tags.length === 0 || project.applyingTags.size > 0)
  return projects
}
