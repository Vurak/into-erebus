import { useFrame } from "@react-three/fiber"
import { useContext, useEffect, useState } from "react"
import ScrollContext from "../../context/ScrollContext"

const lerpVector3 = (initial, final, x) => {
  const current = initial
  for (let i = 0; i < 3; i++) {
    current[i] += final[i] * x
  }
  return current
}

export const NormalizedScrollGroup = ({start, end, position=[0,0,0], deltaPosition=[0,0,0], rotation=[0,0,0], deltaRotation=[0,0,0], children}) => {
  const [pos, setPos] = useState(position)
  const [rot, setRot] = useState(rotation)
  const [normalizedScroll, setNormalizedScroll] = useState(0)
  const { scrollProgress, setScrollProgress } = useContext(ScrollContext)
  
  useEffect(() => {
    const nScroll = scrollProgress/(end - start)
    if (nScroll != normalizedScroll) {
      setNormalizedScroll(nScroll)
      setPos(lerpVector3(position, deltaPosition, normalizedScroll))
      setRot(lerpVector3(rotation, deltaRotation, normalizedScroll))
    }
  }, [scrollProgress])

  return(
    <group position={pos} rotation={rot}>
      {children}
    </group>
  )
}