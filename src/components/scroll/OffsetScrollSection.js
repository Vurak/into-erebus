import { Plane } from "@react-three/drei"
import { useContext, useEffect, useState } from "react"
import DepthContext from "../../context/DepthContext"

const OffsetScrollSection = ({offset, scrollRange, children}) => {
  const depth = useContext(DepthContext)
  return (
    <group position={[offset[0],offset[1],-offset[2]*depth]}>
      {children}
    </group>
  )
}

export default OffsetScrollSection