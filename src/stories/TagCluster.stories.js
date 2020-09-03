import React from 'react'
import TagCluster from '../components/TagCluster'
import '../index.css'

export default {
  title: 'TagCluster',
  component: TagCluster,
}
export const AllTags = () => (
  <TagCluster
    tags={[
      'Non-Profit',
      'For-Profit',
      'Social Business',
      'Technology',
      'Food & Drink',
      'Leisure',
      'Sport',
      'People in need',
      'In-Person-Support',
      'Legal Advice',
      'Software Development',
      'Environment',
    ]}
  />
)
