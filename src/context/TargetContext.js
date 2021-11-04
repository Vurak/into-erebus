import { createContext } from "react"

const TargetContext = createContext({
  target: { status: false, pos: null },
  setTarget: (n) => {}
})

export default TargetContext