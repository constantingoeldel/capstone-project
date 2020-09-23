import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

export default function useNavigationSwipe() {
  const [isNavigationVisible, setNavigationVisible] = useState(false)
  const swipe = useSwipeable({
    onSwipedRight: () => setNavigationVisible(true),
    onSwipedLeft: () => setNavigationVisible(false),
    delta: 100,
    preventDefaultTouchmoveEvent: false,
  })
  return [isNavigationVisible, setNavigationVisible, swipe]
}
