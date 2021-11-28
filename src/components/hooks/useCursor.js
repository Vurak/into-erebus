import { useContext, useEffect, useState } from "react"
import CursorContext from "../../context/CursorContext"

export const useCursor = () => {
  const {cursorProps, setCursorProps} = useContext(CursorContext)
  const [clickable, setClickable] = useState(false)

  // Set default context state
  useEffect(() => {
    setCursorProps({
      clickable: clickable,
    })
  }, [])

  useEffect(() => {
    if (!cursorProps) return

    setCursorProps({
      clickable: clickable,
    })
  }, [clickable])

  return {
    ...cursorProps,
    setClickable
  }
}