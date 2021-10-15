import { useContext, useEffect } from "react"
import OffsetScrollSection from "./scroll/OffsetScrollSection"
import ScrollContext from "../context/ScrollContext"


const ScrollSections = () => {
  
  return (
    <>
      <OffsetScrollSection start={0.2}/>
      <OffsetScrollSection start={0.3}/>
    </>
  )
}

export default ScrollSections