export function createDatabaseEntry(body) {
  console.log('called', body)
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(body),
  }

  fetch(process.env.REACT_APP_PROJECTS_URL, options)
    .then((response) => console.log(response.status))
    .catch((error) => console.log(error))
}

export function uploadImage(image) {
  return new Promise((resolve, reject) => {
    const url = 'https://api.cloudinary.com/v1_1/drrr5s7vb/image/upload'
    const preset = 'os9r6esl'
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', preset)
    const options = {
      method: 'POST',
      body: formData,
    }
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error))
  })
}
