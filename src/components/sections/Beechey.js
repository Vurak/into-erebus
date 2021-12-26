import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import {
  BeecheyMap
} from '../../models'

export const Beechey = ({ z }) => {
  const { nodes, materials } = useGLTF(BeecheyMap)
  
  useEffect(() => {
    console.log(nodes)
  }, [nodes])

  return (
    <group position={[0,0,-z]} rotation={[Math.PI/2,0,0]} scale={[5,5,5]}>
      <mesh

        geometry={nodes.Plane.geometry}
        material={materials['Material.002']}
      />
      <mesh
        geometry={nodes['Cube004'].geometry}
        material={materials['graves']}
      />
      <mesh
        geometry={nodes['Cube005'].geometry}
        material={materials['graves']}
      />
      <mesh
        geometry={nodes['Cube006'].geometry}
        material={materials['graves']}
      />
    </group>
  )
}

useGLTF.preload(BeecheyMap)