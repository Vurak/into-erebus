import { createContext } from "react"

const CursorContext = createContext({
  cursorProps: null,
  setCursorProps: (n) => n
})

export default CursorContext