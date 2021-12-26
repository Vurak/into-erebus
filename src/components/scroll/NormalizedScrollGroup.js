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

export const NormalizedScrollGroup = ({start, end, position=[0,0,0], deltaPosition=null, rotation=[0,0,0], deltaRotation=null, lerpFactor=0.01, children}) => {
  const [normalizedScroll, setNormalizedScroll] = useState(0)
  const { scrollProgress, setScrollProgress } = useContext(ScrollContext)
  const group = useRef()

  const endPositionVector = deltaPosition ? new THREE.Vector3(
    deltaPosition[0],
    deltaPosition[1],
    deltaPosition[2]
  ) : null
  
  const endRotationVector = deltaRotation ? new THREE.Vector3(
    deltaRotation[0],
    deltaRotation[1],
    deltaRotation[2]
  ) : null

  useFrame((state, delta) => {
    if (scrollProgress >= start) {
      const nScroll = (scrollProgress-start)/(end - start)
      setNormalizedScroll(nScroll)
      if (endPositionVector) group.current.position.lerp(endPositionVector.clone().multiplyScalar(nScroll > 1 ? 1 : nScroll), lerpFactor)

      if (deltaRotation) {
        const quaternionRot = THREE.Quaternion.prototype.setFromEuler(group.current.rotation).slerp(THREE.Quaternion.prototype.setFromEuler(THREE.Euler.prototype.setFromVector3(endRotationVector.clone().multiplyScalar(nScroll > 1 ? 1 : nScroll), 'XYZ')), 0.001)
        
        group.current.rotation.x = THREE.Euler.prototype.setFromQuaternion(quaternionRot).x
        group.current.rotation.y = THREE.Euler.prototype.setFromQuaternion(quaternionRot).y
        group.current.rotation.z = THREE.Euler.prototype.setFromQuaternion(quaternionRot).z
      }
    }
  })

  return(
    <group ref={group} position={position} rotation={rotation}>
      {children}
    </group>
  )
}