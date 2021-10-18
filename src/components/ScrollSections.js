import * as THREE from "three"
import { useEffect, useState } from "react"
import OffsetScrollSection from "./scroll/OffsetScrollSection"
import { Html, Plane } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { NormalizedScrollGroup } from "./scroll/NormalizedScrollGroup"

const ScrollSections = () => {
  const [hovered, setHovered] = useState(false)
  const [description, setDescription] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  const texture3 = useLoader(THREE.TextureLoader, "/images/Ship1-min.png")

  return (
    <>
      <OffsetScrollSection offset={[0,-0.5,20]}>
        <Plane
          position={[0,15,0]}
          scale={[50,30,0]}>
          <meshBasicMaterial attach="material" color='#70caff'/>
        </Plane>
        <Plane
          position={[0,0,15]}
          rotation={[-Math.PI/2,0,0]}
          scale={[50,30,0]}
          >
          <meshBasicMaterial attach="material" color='#00142e'/>
        </Plane>
        <NormalizedScrollGroup
          start={0}
          end={0.04}
          deltaPosition={[-2,0,0]}
        >
          <Plane
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setDescription(c=>!c)}
            name="test"
            position={[1.9, 0.5, 10]}>
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
          end={0.05}
          deltaPosition={[-1,0,0]}
        >
          <Plane
            name="test"
            position={[-0.8, 0.5, 8]}>
            <meshBasicMaterial transparent attach="material" map={texture3} />
          </Plane>
        </NormalizedScrollGroup>
      </OffsetScrollSection>
      <OffsetScrollSection offset={[0,0,30]}>
        <Plane
          name="test"
          position={[0.7, 0, -0.5]}>
          <meshBasicMaterial transparent attach="material" map={texture3} />

        </Plane>
      </OffsetScrollSection>
    </>
  )
}

export default ScrollSections