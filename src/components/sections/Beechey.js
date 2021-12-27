import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import {
  BeecheyMap
} from '../../models'
import { NormalizedScrollGroup } from "../scroll/NormalizedScrollGroup"

export const Beechey = ({ z }) => {
  const { nodes, materials } = useGLTF(BeecheyMap)
  
  useEffect(() => {
    console.log(nodes)
  }, [nodes])

  return (
    <group position={[0,0,-z]} rotation={[Math.PI/2,0,0]} scale={[5,5,5]}>
        <NormalizedScrollGroup
        start={0.47}
        end={0.5}
        deltaPosition={[0.2,-0.2,0.05]}
        lerpFactor={0.1}
        deltaRotation={[-Math.PI/2.8, -Math.PI/2, Math.PI/8]}
        scale={[1,0.01,1]}
        deltaScale={[1,1,1]}>
          <NormalizedScrollGroup
            start={0.49}
            end={0.5}
            lerpFactor={0.1}
            scale={[1,0,1]}
            deltaScale={[1,1,1]}>
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
          </NormalizedScrollGroup>
        </NormalizedScrollGroup>
    </group>
  )
}

useGLTF.preload(BeecheyMap)