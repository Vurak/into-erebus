import { useEffect, useRef } from "react"

const Cursor = () => {
  const cursor = useRef(null)

  useEffect(() => {
    window.addEventListener('mousemove', e => {
      if (!cursor?.current) return
      cursor.current.style.top = e.clientY + 'px'
      cursor.current.style.left = e.clientX + 'px'
    })

    return () => {
      window.removeEventListener('mousemove', null)
    }
  })

  return (
    <div
    ref={cursor}
    className="cursor"/>
  )

}

export default Cursor