import { createContext } from "react"

const ScrollContext = createContext({
  scrollProgress: null,
  setScrollProgress: (n) => {}
})

export default ScrollContext