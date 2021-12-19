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
      <Introduction/>
      <OffsetScrollSection offset={[0, -0.2, 40]}>
        <NormalizedScrollGroup
          start={0}
          end={0.21}
          deltaPosition={[-7, 0, 0]}>
          <Plane
            name="test"
            scale={[33,30,1]}
            position={[15, 8, -15]}>
            <meshBasicMaterial transparent attach="material" map={texture3} />
          </Plane>
        </NormalizedScrollGroup>
        <NormalizedScrollGroup
          start={0}
          end={0.21}
          deltaPosition={[-17, 0, 0]}>
          <Plane
            name="test"
            position={[-9, 4, -22]}
            scale={[22,20,1]}>
            <meshBasicMaterial transparent attach="material" map={texture3} />
          </Plane>
        </NormalizedScrollGroup>
        <NormalizedScrollGroup
          start={0}
          end={0.05}
          deltaPosition={[-0.5, 0, 3]}>
          <Plane
            name="test"
            position={[-3, -4, -7]}
            scale={[9.8,3,1]}>
            <meshBasicMaterial transparent attach="material" map={texture_observers} />
          </Plane>
        </NormalizedScrollGroup>
      </OffsetScrollSection>
      <Daguerreotypes/>
    </>
  )
}

export default ScrollSections