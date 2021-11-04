import * as THREE from "three"
import { useContext, useEffect, useState } from "react"
import OffsetScrollSection from "./scroll/OffsetScrollSection"
import { Html, Plane, useAspect } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { NormalizedScrollGroup } from "./scroll/NormalizedScrollGroup"

import TargetContext from "../context/TargetContext"

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
      <OffsetScrollSection offset={[0,-0.2,20]}>
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
          deltaPosition={[-5,0,0]}
        >
          <Plane
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setDescription(c=>!c)}
            name="test"
            scale={scaleShips}
            position={[9, 5, -15]}>
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
          deltaPosition={[-3,0,0]}
        >
          <Plane
            name="test"
            position={[-8, 5, -20]}
            scale={scaleShips}>
            <meshBasicMaterial transparent attach="material" map={texture3} />
          </Plane>
        </NormalizedScrollGroup>
        <NormalizedScrollGroup
          start={0}
          end={0.05}
          deltaPosition={[-0.5,0,0]}
        >
          <Plane
            scale={scaleObs}
            name="test"
            position={[-3, -3, -8]}>
            <meshBasicMaterial transparent attach="material" map={texture_observers} />
          </Plane>
        </NormalizedScrollGroup>
      </OffsetScrollSection>
      <OffsetScrollSection offset={[0,0,90]}>
        <NormalizedScrollGroup
          start={0}
          end={0.21}
          deltaPosition={[0,0,0]}
        >
          <Plane
            onClick={() => setTarget(curr => ({status: true, pos: [0,0,2]}))}
            name="test"
            scale={[5,5,5]}
            position={[9, 0, -15]}>
            <meshBasicMaterial attach="material" color='#ffffff'/>
            {description && 
              <Html distanceFactor={5} position={[-.9, .7, 0]}>
                <div>
                  <p className="text-white font-thin text-xs">bruh</p>
                </div>
              </Html>}
          </Plane>
        </NormalizedScrollGroup>
        <NormalizedScrollGroup
          start={0}
          end={0.21}
          deltaPosition={[-3,0,0]}
        >
          <Plane
            name="test"
            position={[-8, 5, -20]}
            scale={scaleShips}>
            <meshBasicMaterial transparent attach="material" map={texture3} />
          </Plane>
        </NormalizedScrollGroup>
        <NormalizedScrollGroup
          start={0}
          end={0.05}
          deltaPosition={[-0.5,0,0]}
        >
          <Plane
            scale={scaleObs}
            name="test"
            position={[-3, -3, -8]}>
            <meshBasicMaterial transparent attach="material" map={texture_observers} />
          </Plane>
        </NormalizedScrollGroup>
      </OffsetScrollSection>
    </>
  )
}

export default ScrollSections