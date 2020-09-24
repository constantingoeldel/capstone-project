export default async function getDBEntries(url) {
  try {
    let entries = await fetch(url)
    entries = await entries.json()
    return entries
  } catch (error) {
    console.log(error)
  }

  // .then((res) => res.json())
  // .catch((error) => console.log(error))
  // .then((projects) =>
}
