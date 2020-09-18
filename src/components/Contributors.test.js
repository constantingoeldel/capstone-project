import React from 'react'
import { render, screen } from '@testing-library/react'

import Contributors from './Contributors'

const contributors = [
  { name: "Dorine O'Deoran", picture: 'http://dummyimage.com/240x249.jpg/dddddd/000000' },
  { name: 'Tyson Bardill', picture: 'http://dummyimage.com/185x191.jpg/cc0000/ffffff' },
  { name: 'Jenica Trahmel', picture: 'http://dummyimage.com/168x246.jpg/5fa2dd/ffffff' },
  { name: 'Loraine Tarn', picture: 'http://dummyimage.com/187x142.jpg/ff4444/ffffff' },
  { name: 'Blondell McMonies', picture: 'http://dummyimage.com/235x180.jpg/ff4444/ffffff' },
  {
    name: 'Georgi Le Marchant',
    picture: 'http://dummyimage.com/125x226.jpg/5fa2dd/ffffff',
  },
  { name: 'Aile Gilberthorpe', picture: 'http://dummyimage.com/193x195.jpg/dddddd/000000' },
  { name: 'Laurene Shuttle', picture: 'http://dummyimage.com/103x194.jpg/5fa2dd/ffffff' },
  { name: 'Heindrick Ferraro', picture: 'http://dummyimage.com/166x154.jpg/ff4444/ffffff' },
]
describe('Contributors', () => {
  it('Renders Contributors', () => {
    render(<Contributors contributors={contributors} />)
  })
  it('shows the first name and image', () => {
    render(<Contributors contributors={contributors} />)
    screen.getByText('Tyson')
    screen.getByAltText('Tyson Bardill')
  })
  it('Shows the information for all contributors', () => {
    render(<Contributors contributors={contributors} />)
    expect(screen.getAllByAltText(/\s/g)).toHaveLength(7)
  })
})
