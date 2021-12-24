import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { useContext, useEffect, useRef, useState } from "react"
import ScrollContext from "../../context/ScrollContext"

const lerpVector3 = (initial, final, x) => {
  const current = [...initial]
  for (let i = 0; i < 3; i++) {
    current[i] = initial[0] + final[i] * x
  }
  return current
}

export const NormalizedScrollGroup = ({start, end, position=[0,0,0], deltaPosition=[0,0,0], rotation=[0,0,0], deltaRotation=[0,0,0], children}) => {
  const [normalizedScroll, setNormalizedScroll] = useState(0)
  const { scrollProgress, setScrollProgress } = useContext(ScrollContext)
  const group = useRef()

  const endPositionVector = new THREE.Vector3(
    deltaPosition[0],
    deltaPosition[1],
    deltaPosition[2]
  )
  const endRotationVector = new THREE.Vector3(
    deltaRotation[0],
    deltaRotation[1],
    deltaRotation[2]
  )

  useFrame((state, delta) => {
    if (scrollProgress >= start && scrollProgress <= end) {
      const nScroll = (scrollProgress-start)/(end - start)
      setNormalizedScroll(nScroll)
      group.current.position.lerp(endPositionVector.clone().multiplyScalar(nScroll), 0.01)
    }
    // group.current.rotation.set(THREE.Quaternion.setFromEuler(endRotationVector.clone().multiplyScalar(nScroll)), 0.01)
    // group.current.position.x = lerpVector3(position, deltaPosition, nScroll)[0]
    // setRot(lerpVector3(rotation, deltaRotation, normalizedScroll))
  })

  return(
    <group ref={group}>
      {children}
    </group>
  )
}