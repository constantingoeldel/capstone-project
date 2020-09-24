import React from 'react'
import Tags from '../components/Tags'
import '../index.css'

export default {
  title: 'Tag',
  component: Tags,
}
export const ShortTag = () => <Tags content='Sport' />
export const LongTag = () => <Tags content='Social Business' />
