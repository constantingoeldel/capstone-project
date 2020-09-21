import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../Header/Header'

export default function Create({ onBack }) {
  return (
    <>
      <Header title='Initiate a Project' onBack={onBack} />
      <form>
        <label htmlFor='country'>
          <input id='country' type='text' placeholder='Where are you based?'></input>
        </label>
        <button type='button'>Spark progress</button>
      </form>
    </>
  )
}
Create.propTypes = {
  onBack: PropTypes.func.isRequired,
}
