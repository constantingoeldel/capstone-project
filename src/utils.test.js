import mockData from './db.json'
import { sortByTags, filterBySearch } from './utils'
const tags = ['Leisure', 'Sport', 'People in need', 'Software Development']
const tags2 = ['Non-Profit', 'For-Profit', 'Social Business', 'Technology', 'Food & Drink']
const allTags = mockData.tags
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
describe('test sorting function', () => {
  it('always returns something', () => {
    expect(sortByTags([], [{}])).toBeDefined()
    expect(sortByTags(tags, [{}])).toBeDefined()
    expect(sortByTags(undefined, undefined)).toBeDefined()
  })
  it('it returns all projects when no tags are selected', () => {
    expect(sortByTags([], mockData.projects)).toHaveLength(103)
  })
  it('It filters correctly', () => {
    expect(sortByTags(tags, mockData.projects)).toEqual(expectedResult)
  })
  it('ordered correctly', () => {
    expect(
      sortByTags(tags2, mockData.projects)[0].applyingTags.size -
        sortByTags(tags2, mockData.projects)[1].applyingTags.size
    ).toBeGreaterThanOrEqual(0)
    expect(
      sortByTags(tags, mockData.projects)[0].applyingTags.size -
        sortByTags(tags, mockData.projects)[1].applyingTags.size
    ).toBeGreaterThanOrEqual(0)
    expect(
      sortByTags(allTags, mockData.projects)[0].applyingTags.size -
        sortByTags(allTags, mockData.projects)[1].applyingTags.size
    ).toBeGreaterThanOrEqual(0)
    expect(
      sortByTags([], mockData.projects)[0].applyingTags.size -
        sortByTags([], mockData.projects)[1].applyingTags.size
    ).toBeGreaterThanOrEqual(0)
  })
})
describe('Searching', () => {
  it('Always returns something', () => {
    expect(filterBySearch()).toBeDefined()
    // expect(filterBySearch(tags, [{}])).toBeDefined()
    // expect(filterBySearch(undefined, undefined)).toBeDefined()
  })
  it('Filters countries correctly', () => {
    expect(filterBySearch({ target: { value: 'LIB' } }, mockData)).toEqual([
      {
        title: 'Never Refuse Refuge',
        country: 'LIB',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus erat at urna semper tempus. Cras turpis, at luctus elit',
        image: '/images/refugees.jpg',
        tags: ['Social Business', 'In-Person-Support', 'People in need'],
        applyingTags: new Set([]),
      },
    ])
  })
  it('Filters all text correctly', () => {
    expect(filterBySearch({ target: { value: 'qrtuiopacn' } }, mockData)).toEqual([
      {
        country: 'SE',
        description:
          'pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque',
        title: 'Five Minutes to Live',
        tags: ['Social Business', 'Food & Drink'],
        applyingTags: new Set([]),
      },
    ])
  })
})
