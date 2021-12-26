import * as THREE from "three"
import { useContext, useEffect, useState } from "react"
import OffsetScrollSection from "./scroll/OffsetScrollSection"
import { Html, Plane, useAspect } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { NormalizedScrollGroup } from "./scroll/NormalizedScrollGroup"
import { CenterText, PlaneImage } from "./sections/utils"

import { ship, observers } from '../images'
import { BeecheyIsland } from '@images/maps'
import { imfell } from '@fonts'

// Sections
import {
  Introduction,
  Daguerreotypes,
  Beechey,

} from './sections'

const ScrollSections = () => {
  
  return (
    <>
      <Introduction z={30}/>
      {/* <CenterText z={300} font={imfell} size={2}>
        1845
      </CenterText> */}
      <Beechey z={300}/>
      {/* <Daguerreotypes z={300}/> */}
    </>
  )
}

export default ScrollSections