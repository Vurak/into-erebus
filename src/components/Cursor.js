import { useState, useEffect, useRef, useContext } from "react"

import './Cursor.css'
import { useCursor } from "./hooks"

const Cursor = () => {
  const cursor = useRef(null)
  const [click, setClick] = useState(false)

  const { clickable } = useCursor()
  
  const moveCursor = (e) => {
    cursor.current.setAttribute('style',`transform: translate3d(${e.clientX-20}px, ${e.clientY-window.innerHeight-20}px, 0);`)
  }

  const clickCursor = () => {
    // if (click) return
    setClick(true)
    setTimeout(() => setClick(false), 400)
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

  useEffect(() => {
    console.log("clickable changed", clickable)
  }, [clickable])

  return (
    <div
    ref={cursor}
    className={`cursor ${click && 'cursor-click'} ${clickable ? 'cursor-clickable' : ''}`}
    >
      <div className={`cursor-center ${click ? 'cursor-center-click' : ''} ${clickable ? 'cursor-center-clickable' : ''}`}/>
    </div>
  )

}

export default Cursor