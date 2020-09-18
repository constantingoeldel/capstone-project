import React from 'react'
import { render, screen } from '@testing-library/react'

import TagCluster from './TagCluster'
const tags = [
  {
    _id: '5f589b40c1ec79f7e8560ea4',
    text: 'Non-Profit',
    applies: false,
  },
  {
    _id: '5f589ba2c1ec79f7e8560ea5',
    text: 'For-Profit',
    applies: false,
  },
  {
    _id: '5f589be4c1ec79f7e8560ea6',
    text: 'Social Business',
    applies: false,
  },
  {
    _id: '5f589c31c1ec79f7e8560ea7',
    text: 'Technology',
    applies: false,
  },
  {
    _id: '5f589c5ac1ec79f7e8560ea8',
    text: 'Food & Drink',
    applies: false,
  },
  {
    _id: '5f589c78c1ec79f7e8560ea9',
    text: 'Leisure',
    applies: false,
  },
  {
    _id: '5f589c87c1ec79f7e8560eaa',
    text: 'Sport',
    applies: false,
  },
  {
    _id: '5f589c94c1ec79f7e8560eab',
    text: 'People in need',
    applies: false,
  },
  {
    _id: '5f589ca6c1ec79f7e8560eac',
    text: 'Local Support',
    applies: false,
  },
  {
    _id: '5f589cbcc1ec79f7e8560ead',
    text: 'Legal Advice',
    applies: false,
  },
  {
    _id: '5f589ccbc1ec79f7e8560eae',
    text: 'Software Development',
    applies: false,
  },
  {
    _id: '5f589cdec1ec79f7e8560eaf',
    text: 'Environment',
    applies: false,
  },
  {
    _id: '5f589cf0c1ec79f7e8560eb0',
    text: 'Health',
    applies: false,
  },
]

describe('TagCluster', () => {
  it('Renderes TagCluster', () => {
    render(<TagCluster tags={tags} onTagClick={() => {}} />)
  })
  it('TagCluster is a list of tags', () => {
    render(<TagCluster tags={tags} onTagClick={() => {}} />)
    screen.getByRole('list')
  })
  it('TagCluster has enough listitems', () => {
    render(<TagCluster tags={tags} onTagClick={() => {}} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(13)
  })
})
