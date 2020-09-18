import React from 'react'
import { render, screen } from '@testing-library/react'

import ProjectHeadline from './ProjectHeadline'

describe('Headline', () => {
  it('Renderes Headline', () => {
    render(<ProjectHeadline title='Toughjoyfax' country='CA' />)
  })
  it('Headline consists of title and country', () => {
    render(<ProjectHeadline title='Toughjoyfax' country='CA' />)
    screen.getByRole('heading')
    screen.getByText(/CA/)
  })
  it('Inserts | between country and title', () => {
    render(<ProjectHeadline title='Toughjoyfax' country='CA' />)
    screen.getByText('CA | Toughjoyfax')
  })
})
