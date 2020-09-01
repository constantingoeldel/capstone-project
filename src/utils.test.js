// import { sum } from './utils'

// test('Adds correctly', () => {
//   expect(sum(1, 2)).toBe(3)
// })
import mockData from './db.json'
import { sortByTags } from './utils'
const tags = ['Leisure', 'Sport', 'People in need', 'Software Development']
const expectedResult = [
  {
    title: 'Never Refuse Refuge',
    country: 'LIB',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus erat at urna semper tempus. Cras turpis, at luctus elit',
    image: '/images/refugees.jpg',
    tags: ['Social Business', 'In-Person-Support', 'People in need'],
    applyingTags: new Set(['People in need']),
  },
  {
    country: 'YE',
    description: 'faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat',
    title: 'The Last Shark',
    tags: ['For-Profit', 'Technology', 'Software Development'],
    applyingTags: new Set(['Software Development']),
  },
  {
    country: 'CN',
    description:
      'odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus',
    title: "Solomon Northup's Odyssey",
    tags: ['For-Profit', 'Technology', 'People in need'],
    applyingTags: new Set(['People in need']),
  },
  {
    country: 'CZ',
    description:
      'blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse',
    title: "Project A ('A' gai waak)",
    tags: ['For-Profit', 'Technology', 'Sport'],
    applyingTags: new Set(['Sport']),
  },
  {
    country: 'MK',
    description: 'diam neque vestibulum eget vulputate ut ultrices vel augue',
    title: 'Mary Stevens M.D.',
    tags: ['For-Profit', 'Technology', 'Leisure'],
    applyingTags: new Set(['Leisure']),
  },
  {
    country: 'CN',
    description: 'dolor sit amet consectetuer adipiscing elit proin risus praesent',
    title: 'Sahara',
    tags: ['For-Profit', 'Technology', 'People in need'],
    applyingTags: new Set(['People in need']),
  },
]
test('It filters correctly', () => {
  expect(sortByTags(tags, mockData.projects)).toEqual(expectedResult)
})
