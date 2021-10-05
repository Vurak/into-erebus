import React, { useRef } from "react"
import { PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import Particles from "../particles/Particles"

const ScrollCamera = ({ scroll }) => {
  const camera = useRef()
  const extras = { receiveShadow: true, castShadow: true }

  useFrame((state) => {
    camera.current.position.z = 2.04 - scroll * 100
  })

  return (
    <group ref={camera} name="Camera" position={[0, 0, 0]} rotation={[1.62, 0, 0]} >
      <PerspectiveCamera makeDefault far={50} near={0.1} fov={28} rotation={[-Math.PI / 2, 0, 0]}>
        <Particles count={5000}/>
      </PerspectiveCamera>
    </group>
  )
}

export default ScrollCamera