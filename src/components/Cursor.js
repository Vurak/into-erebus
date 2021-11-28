import { useState, useEffect, useRef } from "react"

import './Cursor.css'

const Cursor = () => {
  const cursor = useRef(null)
  const [click, setClick] = useState(false)
  const moveCursor = (e) => {
    cursor.current.setAttribute('style',`transform: translate3d(${e.clientX-20}px, ${e.clientY-window.innerHeight-20}px, 0);`)
  }

  const clickCursor = () => {
    // if (click) return
    setClick(true)
    setTimeout(() => setClick(false), 500)
  }
  
  useEffect(() => {
    if (!cursor?.current) return
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', clickCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', clickCursor)
    }
  }, [])

  return (
    <div
    ref={cursor}
    className={`cursor ${click && 'cursor-click'}`}
    >
      <div className={`cursor-center ${click && 'cursor-center-click'}`}/>
    </div>
  )

}

export default Cursor