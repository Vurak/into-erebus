import * as THREE from "three"
import { useContext, useEffect, useState } from "react"
import OffsetScrollSection from "./scroll/OffsetScrollSection"
import { Html, Plane, useAspect } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { NormalizedScrollGroup } from "./scroll/NormalizedScrollGroup"

import { ship, observers } from '../images'

// Sections
import {
  Introduction,
  Daguerreotypes,

} from './sections'

const ScrollSections = () => {
  const [hovered, setHovered] = useState(false)

  // useEffect(() => {
  //   document.body.style.cursor = hovered ? 'pointer' : 'auto'
  // }, [hovered])

  const texture3 = useLoader(THREE.TextureLoader, ship)
  const texture_observers = useLoader(THREE.TextureLoader, observers)

  return (
    <>
      <Introduction z={30}/>
      
      <Daguerreotypes z={300}/>
    </>
  )
}

export default ScrollSections