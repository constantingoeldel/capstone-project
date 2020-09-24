import React from 'react'
import { render, screen } from '@testing-library/react'

import Overlay from './Overlay'
const project = {
  title: 'Toughjoyfax',
  location: { country: 'Philippines', countrycode: 'PH', city: 'Santo Ni\u00f1o' },
  contributors: [
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
  ],
  details: [
    { title: 'mission', information: 'Nunc rhoncus dui vel sem. Sed sagittis.' },
    { title: 'about', information: 'Fusce consequat. Nulla nisl.' },
    { title: 'updates', information: 'In blandit ultrices enim.' },
    { title: 'comments', information: 'Aliquam erat volutpat.' },
  ],
  description:
    'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
  tags: [
    { applies: false, text: 'For-Profit' },
    { applies: false, text: 'People in need' },
    { applies: false, text: 'Legal Advice' },
    { applies: false, text: 'Technology' },
  ],
}
describe('Overlay', () => {
  it('Renderes Overlay', () => {
    render(<Overlay key={project._id} project={project} onBack={() => () => {}} />)
  })
  it('Has all necessary components', () => {
    render(<Overlay key={project._id} project={project} onBack={() => () => {}} />)
    screen.getByText(project.title)
    screen.getByRole('list')
    screen.getByText('Mission')
    screen.getByText(project.description)
    expect(screen.getAllByRole('img')).toHaveLength(10)
  })
})
