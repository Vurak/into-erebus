import * as THREE from "three"
import { useContext, useEffect, useState } from "react"
import OffsetScrollSection from "./scroll/OffsetScrollSection"
import { Html, Plane, useAspect } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { NormalizedScrollGroup } from "./scroll/NormalizedScrollGroup"

import TargetContext from "../context/TargetContext"

// Sections
import {
  Daguerreotypes
} from './sections'

const ScrollSections = () => {
  const [hovered, setHovered] = useState(false)
  const [description, setDescription] = useState(false)

  const { target, setTarget } = useContext(TargetContext)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  const texture3 = useLoader(THREE.TextureLoader, "/images/Ship1-min.png")
  const texture_observers = useLoader(THREE.TextureLoader, "/images/Observers.png")

  const scaleObs = useAspect(1445, 442, 0.3)
  const scaleShips = useAspect(2396, 2124, 1)

  return (
    <>
      <OffsetScrollSection offset={[0, -0.2, 20]}>
        {/* <Plane
          position={[0,15,0]}
          scale={[50,30,0]}>
          <meshBasicMaterial attach="material" color='#70caff'/>
        </Plane> */}
        {/* <Plane
          position={[0,-2,-30]}
          rotation={[-Math.PI/2,0,0]}
          scale={[50,100,0]}
          >
          <meshBasicMaterial attach="material" color='#00142e'/>
        </Plane> */}
        <NormalizedScrollGroup
          start={0}
          end={0.21}
          deltaPosition={[-10, 0, 0]}
        >
          <Plane
            name="test"
            scale={[33,30,1]}
            position={[15, 8, -15]}>
            <meshBasicMaterial transparent attach="material" map={texture3} />
            {description &&
              <Html distanceFactor={5} position={[-.9, .7, 0]}>
                <div>
                  <p className="text-white font-thin text-xs">Test</p>
                </div>
              </Html>}
          </Plane>
        </NormalizedScrollGroup>
        <NormalizedScrollGroup
          start={0}
          end={0.21}
          deltaPosition={[-5, 0, 0]}
        >
          <Plane
            name="test"
            position={[-8, 4, -22]}
            scale={[22,20,1]}>
            <meshBasicMaterial transparent attach="material" map={texture3} />
          </Plane>
        </NormalizedScrollGroup>
        <NormalizedScrollGroup
          start={0}
          end={0.05}
          deltaPosition={[-0.5, 0, 0]}
        >
          <Plane
            name="test"
            position={[-3, -6, -7]}
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