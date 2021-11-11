import * as THREE from "three"
import { useContext, useEffect, useRef, useState } from "react"
import OffsetScrollSection from "../scroll/OffsetScrollSection"
import { Html, Plane, useAspect } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { NormalizedScrollGroup } from "../scroll/NormalizedScrollGroup"

import TargetContext from "../../context/TargetContext"
import { Vector3 } from "three"

export const Daguerreotypes = () => {
  const [description, setDescription] = useState(false)

  const { target, setTarget } = useContext(TargetContext)
  const targetRef = useRef(null)

  const handleClick = (e) => {
    console.log(e.object.localToWorld(new Vector3(0,0,6)))
    setTarget(e.object.localToWorld(new Vector3(0,0,10)))
  }

  return (
    <OffsetScrollSection offset={[0, 0, 90]}>
      <NormalizedScrollGroup
        start={0}
        end={0.21}
        deltaPosition={[0, 0, 0]}
      >
        <Plane
          onClick={handleClick}
          name="test"
          scale={[3, 4, 1]}
          position={[9, 0, -20]}>
          <meshBasicMaterial attach="material" color='#ffffff' />
        </Plane>
        <Plane
          onClick={handleClick}
          name="test"
          scale={[3, 4, 1]}
          position={[4, 7, -5]}>
          <meshBasicMaterial attach="material" color='#ffffff' />
        </Plane>
        <Plane
          onClick={handleClick}
          name="test"
          scale={[3, 4, 1]}
          position={[-9, 0, 0]}>
          <meshBasicMaterial attach="material" color='#ffffff' />
        </Plane>
        <Plane
          onClick={handleClick}
          name="test"
          scale={[3, 4, 1]}
          position={[-7, 4, -25]}>
          <meshBasicMaterial attach="material" color='#ffffff' />
        </Plane>
        <Plane
          onClick={handleClick}
          name="test"
          scale={[3, 4, 1]}
          position={[-6, -4, -10]}>
          <meshBasicMaterial attach="material" color='#ffffff' />
        </Plane>
      </NormalizedScrollGroup>
    </OffsetScrollSection>
  )
}