import { Plane } from "@react-three/drei"
import { useContext, useEffect } from "react"
import DepthContext from "../../context/DepthContext"

const NormalizedScrollSection = ({start, end}) => {
  const { depth } = useContext(DepthContext)
  return (
    <group position={[0,0,-start*depth]}>
      <Plane
      name="test"
      position={[-0.5, 0, -0.5]}>
        <meshBasicMaterial attach="material" color="pink" />
      </Plane>
    </group>
  )
}

export default NormalizedScrollSection