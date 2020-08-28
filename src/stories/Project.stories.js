import React from 'react'
import { Project } from './Project'

export default {
  title: 'Project',
  component: Project,
}
export const LongDescription = () => (
  <Project
    title='Take a breather'
    country='AUS'
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus erat at urna semper tempus. Cras euismod semper turpis, at luctus elit dignissim non. Curabitur id arcu in justo pellentesque.'
    image='/images/wildfire.jpg'
  />
)
export const ShortDescription = () => (
  <Project
    title='Take a breather'
    country='AUS'
    description='Lorem ipsum doloruelit dignissim non. Curabitur id arcu in justo pellentesque.'
    image='/images/ZeroClimate.jpg'
  />
)
export const LongTitle = () => (
  <Project
    title='Never Refuse Refuge'
    country='AUS'
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus eelit dignissim non. Curabitur id arcu in justo pellentesque.'
    image='/images/refugees.jpg'
  />
)
