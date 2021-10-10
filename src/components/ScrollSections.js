import { useContext, useEffect } from "react"
import NormalizedScrollSection from "./scroll/NormalizedScrollSection"
import ScrollContext from "../context/ScrollContext"


const ScrollSections = () => {
  
  const { scrollProgress } = useContext(ScrollContext)

  return (
    <>
      <NormalizedScrollSection scroll={scrollProgress} start={0.2} end={0.1}/>
    </>
  )
}

export default ScrollSections