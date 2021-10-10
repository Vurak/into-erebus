import React, { useRef, useContext } from "react"
import { PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import Particles from "../particles/Particles"
import DepthContext from "../../context/DepthContext"

const ScrollCamera = ({ scroll }) => {
  const camera = useRef()
  const depth = useContext(DepthContext)
  
  useFrame((state) => {
    camera.current.position.z = -scroll * depth
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