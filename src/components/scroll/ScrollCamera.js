import * as THREE from "three"
import React, { useRef, useContext } from "react"
import { PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import Particles from "../particles/Particles"
import DepthContext from "../../context/DepthContext"
import ScrollContext from "../../context/ScrollContext"

const ScrollCamera = () => {
  const camera = useRef()
  const depth = useContext(DepthContext)
  const {scrollProgress} = useContext(ScrollContext)
  
  useFrame((state) => {
    camera.current.position.lerp(new THREE.Vector3(0,0,-scrollProgress * depth),0.5)
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