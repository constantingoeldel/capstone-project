import React from 'react'
import Search from '../components/Search'
import '../index.css'

export default {
  title: 'Search',
  component: Search,
}
export const emptySearch = () => <Search onSearch={() => {}} />
