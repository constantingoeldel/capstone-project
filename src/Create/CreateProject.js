import React, { useEffect, useState } from 'react'
import { useStateWithCallbackLazy } from 'use-state-with-callback'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../Header/Header'
import TagCluster from '../TagCluster/TagCluster'
import { createDatabaseEntry, uploadImage } from '../services/services'
import getDBEntries from '../services/getDBEntries'

export default function Create({ onBack }) {
  const [tags, setTags] = useState([])
  const [image, setImage] = useState()
  const [newProject, setNewProject] = useStateWithCallbackLazy({
    details: [{}, {}],
    contributors: [],
  })
  const [locationSuggestions, setLocationSuggestions] = useState([])
  const [lastAPICallTimestamp, setAPICallTimestamp] = useState(0)

  useEffect(() => {
    getDBEntries(process.env.REACT_APP_TAGS_URL).then((entries) => setTags(entries))
  }, [])
  return (
    <>
      <Header title='Initiate a Project' onBack={onBack} />
      <Form>
        <label htmlFor='image'>
          Select an image:
          <img
            alt='User uploaded'
            src={image ? URL.createObjectURL(image) : '/images/image-missing.jpg'}
          />
        </label>
        <input
          type='file'
          id='image'
          accept='image/*'
          onChange={(event) => setImage(event.target.files[0])}
        />
        <label htmlFor='location'>Where are you based?</label>
        <input
          id='location'
          type='text'
          pattern='^\w+(?:(?:,\s\w+)+|(?:\s\w+)+)$'
          required
          placeholder='Start typing your city'
          onChange={getLocation}
        />
        <LocationList>
          {locationSuggestions?.length > 0 ? (
            locationSuggestions?.map((suggestion) => (
              <LocationSuggestion
                onClick={() => {
                  document.getElementById(
                    'location'
                  ).value = `${suggestion.city}, ${suggestion.country}`
                  setLocationSuggestions([])
                  setNewProject({
                    ...newProject,
                    location: {
                      country: suggestion.country,
                      countrycode: suggestion.countryCode,
                      city: suggestion.city,
                    },
                  })
                }}
                key={suggestion.id}
              >
                {suggestion.city}, {suggestion.country}
              </LocationSuggestion>
            ))
          ) : (
            <LocationSuggestion>Please enter a valid city</LocationSuggestion>
          )}
        </LocationList>

        <label htmlFor='title'>Go forth with a memorable name:</label>
        <input
          id='title'
          type='text'
          pattern='.*\S.*'
          required
          placeholder='Saline Tuna maybe?'
          onChange={(event) => setNewProject({ ...newProject, title: event.target.value })}
        />
        <label htmlFor='description'>
          Give the elevator pitch: This summary will be the first thing others read
        </label>
        <textarea
          id='description'
          pattern='.*\S.*'
          required
          rows='4'
          placeholder='So ähm our idea...'
          onChange={(event) => setNewProject({ ...newProject, description: event.target.value })}
        />
        <label htmlFor='mission'>Describe why your mission is a force for good:</label>
        <textarea
          id='mission'
          pattern='.*\S.*'
          required
          rows='4'
          placeholder='Anything less than world peace won`t cut it, sorry :)'
          onChange={(event) =>
            setNewProject({
              ...newProject,
              details: [
                (newProject.details[0] = { title: 'mission', information: event.target.value }),
                newProject.details[1],
              ],
            })
          }
        />
        <label htmlFor='about'>Finally, some words about you and potentially your team:</label>
        <textarea
          id='about'
          pattern='.*\S.*'
          required
          rows='4'
          placeholder='Avengers, assemble!'
          onChange={(event) =>
            setNewProject({
              ...newProject,
              details: [
                newProject.details[0],
                (newProject.details[1] = { title: 'about', information: event.target.value }),
              ],
            })
          }
        />
        <label htmlFor='tags'>Please select tags that fit your initiative</label>
        {<TagCluster tags={tags} id='tags' onTagClick={onTagClick} />}
        <SubmitButton type='button' onClick={onCreate}>
          Spark progress
        </SubmitButton>
      </Form>
    </>
  )
  function getLocation(event) {
    const searchParam = event.target.value
    //The API I am using allows for one request/second only
    lastAPICallTimestamp + 1000 < event.timeStamp &&
      fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${searchParam}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          'x-rapidapi-key': '05c2663c7fmshaab884373b6f6ddp1d934djsna912f79047da',
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result)
          setLocationSuggestions(result.data)
        })
        .catch((err) => {
          console.log(err)
        }) &&
      setAPICallTimestamp(event.timeStamp)
  }
  function onTagClick(tag, index) {
    setTags([
      ...tags.slice(0, index),
      { text: tag.text, applies: !tag.applies },
      ...tags.slice(index + 1),
    ])
  }
  async function onCreate() {
    let applyingTags = tags.filter((tag) => tag.applies)
    console.log(image)
    const res = await uploadImage(image)
    setNewProject(
      {
        ...newProject,
        // Not meant to stay
        contributors: [
          { name: "Dorine O'Deoran", picture: 'http://dummyimage.com/240x249.jpg/dddddd/000000' },
          { name: 'Tyson Bardill', picture: 'http://dummyimage.com/185x191.jpg/cc0000/ffffff' },
          { name: 'Jenica Trahmel', picture: 'http://dummyimage.com/168x246.jpg/5fa2dd/ffffff' },
          { name: 'Loraine Tarn', picture: 'http://dummyimage.com/187x142.jpg/ff4444/ffffff' },
          { name: 'Blondell McMonies', picture: 'http://dummyimage.com/235x180.jpg/ff4444/ffffff' },
        ],
        image: res.secure_url,
        tags: applyingTags.map((tag) => {
          return { applies: false, text: tag.text }
        }),
      },
      (newProject) => console.log(newProject)
    )
  }
}

Create.propTypes = {
  onBack: PropTypes.func.isRequired,
}
const Form = styled.form`
  margin: 20px;
  & > label {
    font-size: 100%;
    font-weight: 300;
    padding: 15px;
    padding-bottom: 5px;
    display: inline-block;
    & > img {
      margin-top: 20px;
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 25px;
    }
  }
  & > input {
    font-size: 100%;
    width: 290px;
    font-weight: 300;
    padding: 10px;
    padding-left: 15px;
    margin: 10px;
    border: 2px dashed #11dc8b;
    outline: 0;
    border-radius: 5em;
    box-sizing: border-box;
    &:valid {
      border: 2px solid #11dc8b;
    }
  }
  & > #image {
    display: none;
  }
  & > textarea {
    resize: none;
    font-size: 100%;
    font-weight: 300;
    font-family: inherit;
    padding: 15px;
    margin: 10px;
    border: 2px dashed #11dc8b;
    outline: 0;
    border-radius: 15px;
    box-sizing: border-box;
    width: 296px;
    &:valid {
      border: 2px solid #11dc8b;
    }
  }
`
const SubmitButton = styled.button`
  background-color: #11dc8b;
  border: 0;
  outline: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: white;
  font-size: 140%;
  padding: 8px 10px;
  width: calc(100% - 50px);
  margin: 20px 0 0 15px;
`
const LocationList = styled.ul`
  border: 2px solid #11dc8b;
  margin-top: 0;
  width: 290px;
  list-style-type: none;
  margin-left: 12px;
  padding: 0;
  border-radius: 10px;
  & > :nth-child(2n) {
    background-color: rgba(17, 220, 139, 0.2);
  }
`
const LocationSuggestion = styled.li`
  background-color: white;
  border-radius: 10px;
  outline: 0;
  box-sizing: border-box;
  color: rgba(46, 46, 58, 0.7);
  font-size: 100%;
  padding: 8px 10px;
  margin: 0;
  &:hover {
    background-color: #11dc8b;
    opacity: 70%;
    color: white;
  }
`
