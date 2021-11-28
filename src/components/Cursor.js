import { useState } from "react"
import { useEffect, useRef } from "react"

import './Cursor.css'

const Cursor = () => {
  const cursor = useRef(null)

  const moveCursor = (e) => {
    cursor.current.setAttribute('style',`transform: translate3d(${e.clientX-20}px, ${e.clientY-window.innerHeight-20}px, 0);`)
  }
  
  useEffect(() => {
    if (!cursor?.current) return
    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div
    ref={cursor}
    className="cursor"
    // style={{top: `${cursorPos[0]}px`, left: `${cursorPos[1]}px`}}
    />
  )

}

export default Cursor