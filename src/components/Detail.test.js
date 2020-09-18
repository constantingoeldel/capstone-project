import React from 'react'
import { render, screen } from '@testing-library/react'

import Detail from './Detail'
const details = [
  { title: 'mission', information: 'Nunc rhoncus dui vel sem. Sed sagittis.' },
  { title: 'about', information: 'Fusce consequat. Nulla nisl.' },
  { title: 'updates', information: 'In blandit ultrices enim.' },
  { title: 'comments', information: 'Aliquam erat volutpat.' },
]

describe('Detail', () => {
  it('Renderes Detail', () => {
    render(<Detail title='mission' content='Nunc rhoncus dui vel sem. Sed sagittis.' />)
  })
  it('Detail consists of title and content', () => {
    render(<Detail title='mission' content='Nunc rhoncus dui vel sem. Sed sagittis.' />)
    screen.getByRole('heading')
    screen.getByText('Nunc rhoncus dui vel sem. Sed sagittis.')
  })
  it('Shows all the details', () => {
    render(
      details.map((detail) => (
        <Detail key={detail.title} title={detail.title} content={detail.information} />
      ))
    )
    expect(screen.getAllByRole('heading')).toHaveLength(4)
  })
})
