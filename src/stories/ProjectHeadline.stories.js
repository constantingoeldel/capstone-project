import React from 'react'
import { ProjectHeadline } from './ProjectHeadline'

export default {
  title: 'ProjectHeadline',
  component: ProjectHeadline,
}
export const ShortTitle = () => <ProjectHeadline title='Breather' country='AUS' />
export const LongTitle = () => <ProjectHeadline title='Never Refuse Refuge' country='AUS' />
