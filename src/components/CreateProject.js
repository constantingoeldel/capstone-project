import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Create() {
  return (
    <form>
      <label htmlFor='country'>
        <input id='country' type='text' placeholder='Where are you based?'></input>
      </label>
      <button type='button'>Spark progress</button>
    </form>
  )
}
