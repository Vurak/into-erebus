import { createContext } from "react"

const ScrollContext = createContext({
  scrollProgress: 0,
  setScrollProgress: (n) => {}
})

export default ScrollContext