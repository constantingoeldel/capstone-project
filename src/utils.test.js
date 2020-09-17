import { sortByTags, filterBySearch } from './utils'
const searchTerm = 'Alle'
const searchTerm2 = 'Allejfejfiedie'

const tags = ['Sport', 'People in need', 'Technology']
const twoProjects = [
  {
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
  },
  {
    title: 'Hatity',
    location: { country: 'Philippines', countrycode: 'PH', city: 'Tarragona' },
    contributors: [
      { name: 'Darleen Bladder', picture: 'http://dummyimage.com/220x170.jpg/ff4444/ffffff' },
      { name: 'Sara-ann Renshell', picture: 'http://dummyimage.com/249x101.jpg/dddddd/000000' },
      { name: 'Ashley Boutflour', picture: 'http://dummyimage.com/223x231.jpg/5fa2dd/ffffff' },
      { name: 'Padriac Sives', picture: 'http://dummyimage.com/104x144.jpg/ff4444/ffffff' },
      { name: 'Charlie Costley', picture: 'http://dummyimage.com/156x237.jpg/ff4444/ffffff' },
      { name: 'Darn Johannesson', picture: 'http://dummyimage.com/157x204.jpg/cc0000/ffffff' },
      { name: 'Georas McTrustam', picture: 'http://dummyimage.com/117x229.jpg/ff4444/ffffff' },
      { name: 'Izzy MacGinney', picture: 'http://dummyimage.com/169x245.jpg/5fa2dd/ffffff' },
      { name: 'Emelda Joist', picture: 'http://dummyimage.com/139x146.jpg/cc0000/ffffff' },
      { name: 'Lucilia Klezmski', picture: 'http://dummyimage.com/196x188.jpg/5fa2dd/ffffff' },
      { name: 'Starlene Mulvy', picture: 'http://dummyimage.com/125x131.jpg/ff4444/ffffff' },
      { name: 'Dalia Franiak', picture: 'http://dummyimage.com/177x145.jpg/5fa2dd/ffffff' },
      { name: 'Cammi Badham', picture: 'http://dummyimage.com/170x170.jpg/5fa2dd/ffffff' },
      {
        name: 'Chaddie Fitzsimmons',
        picture: 'http://dummyimage.com/240x170.jpg/dddddd/000000',
      },
      { name: 'Chelsae Nicolson', picture: 'http://dummyimage.com/176x152.jpg/dddddd/000000' },
      {
        name: 'Dianemarie Woolward',
        picture: 'http://dummyimage.com/163x181.jpg/cc0000/ffffff',
      },
      { name: 'Timothee Pawellek', picture: 'http://dummyimage.com/184x101.jpg/ff4444/ffffff' },
    ],
    details: [
      {
        title: 'mission',
        information:
          'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
      },
    ],
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    tags: [
      { applies: false, text: 'Health' },
      { applies: false, text: 'Leisure' },
      { applies: false, text: 'Food & Drink' },
      { applies: false, text: 'Legal Advice' },
      { applies: false, text: 'Software Development' },
      { applies: false, text: 'Environment' },
    ],
  },
]
describe('Sorting by Tags', () => {
  it('Returns unaltered array of objects', () => {
    expect(sortByTags([], twoProjects)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Toughjoyfax',
          tags: [
            { applies: false, text: 'For-Profit' },
            { applies: false, text: 'People in need' },
            { applies: false, text: 'Legal Advice' },
            { applies: false, text: 'Technology' },
          ],
        }),
      ])
    )
  })
  it('It filters correctly', () => {
    expect(sortByTags(tags, twoProjects)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Toughjoyfax',
          tags: [
            { applies: false, text: 'For-Profit' },
            { applies: true, text: 'People in need' },
            { applies: false, text: 'Legal Advice' },
            { applies: true, text: 'Technology' },
          ],
        }),
      ])
    )
  })
  it('is ordered correctly', () => {
    expect(sortByTags(tags, twoProjects)).toEqual(twoProjects)
  })
})
describe('Searching', () => {
  it('Appends according to Search terms property', () => {
    expect(filterBySearch(searchTerm, twoProjects)).toEqual(
      expect.arrayContaining([expect.objectContaining({ accordingToSearchTerms: true })])
    )
  })
  it('Returns false when SearchTerm does not apply', () => {
    expect(filterBySearch(searchTerm, twoProjects)).toEqual(
      expect.arrayContaining([expect.objectContaining({ accordingToSearchTerms: false })])
    )
  })
})
