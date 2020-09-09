import React from 'react'
import Overlay from '../components/Overlay'
import '../index.css'
import mockData from '../db.json'

export default {
  title: 'Overlay',
  component: Overlay,
}
export const defaultOverlay = () => {
  return <Overlay project={mockData.projects[0]} onBack={() => {}} />
}
