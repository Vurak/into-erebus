import { Plane } from "@react-three/drei"

const NormalizedScrollSection = ({scroll, start, end}) => {
  return (
    <>
    <group>
      <Plane
      name="test"
      position={[-0.5, 0, -0.5]}>
        <meshBasicMaterial attach="material" color="pink" />
      </Plane>
      </group>
    </>
  )
}

export default NormalizedScrollSection