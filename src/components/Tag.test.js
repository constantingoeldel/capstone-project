import React from 'react'
import { render, screen } from '@testing-library/react'

import Tag from './Tag'
const tag = { applies: false, text: 'For-Profit' }

describe('Tag', () => {
  it('Renderes Tag', () => {
    render(
      <Tag
        key={tag.text}
        text={tag.text}
        applies={tag.applies}
        background={{
          active: '#11dc8b',
          inactive: '#11dc8b',
          opacityActive: 1,
          opacityInactive: 0.6,
        }}
      />
    )
  })
  it('Tag returns text', () => {
    render(
      <Tag
        key={tag.text}
        text={tag.text}
        applies={tag.applies}
        background={{
          active: '#11dc8b',
          inactive: '#11dc8b',
          opacityActive: 1,
          opacityInactive: 0.6,
        }}
      />
    )
    screen.getByText(tag.text)
  })
  it('Tag has correct role', () => {
    render(
      <Tag
        key={tag.text}
        text={tag.text}
        applies={tag.applies}
        background={{
          active: '#11dc8b',
          inactive: '#11dc8b',
          opacityActive: 1,
          opacityInactive: 0.6,
        }}
      />
    )
    screen.getByRole('listitem')
  })
})
