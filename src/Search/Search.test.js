import React from 'react'
import { render, screen } from '@testing-library/react'

import Search from './Search'

describe('Search', () => {
  it('Renderes Search', () => {
    render(<Search onSearch={() => {}} />)
  })
  it('Search consists of input and button', () => {
    render(<Search onSearch={() => {}} />)
    screen.getByRole('textbox')
    screen.getByRole('button')
  })
  it('Input has placeholder', () => {
    render(<Search onSearch={() => {}} />)
    screen.getByPlaceholderText('Search for Projects')
  })
})
