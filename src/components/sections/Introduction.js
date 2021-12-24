import OffsetScrollSection from "../scroll/OffsetScrollSection"
import * as THREE from 'three'
import { useLoader } from "@react-three/fiber"
import { Plane, Text } from "@react-three/drei"
import { CenterText } from "./utils"

import {
  imfell_pica
} from '@fonts'

import { ship, observers } from '../../images'
import { NormalizedScrollGroup } from "../scroll/NormalizedScrollGroup"


export const Introduction = () => {
  const ship_tex = useLoader(THREE.TextureLoader, ship)
  const observers_tex = useLoader(THREE.TextureLoader, observers)
  
  return (
    <OffsetScrollSection offset={[0, 0, 30]}>
      <CenterText z={0}>
        {"For a while it had been thought there might be a route\nto the orient over the Americas via the Arctic."}
      </CenterText>
      <CenterText z={30}>
        {"In 1745 the British Admiralty promised a £20,000 prize\nfor whoever discovered this passage."}
      </CenterText>
      <CenterText z={60}>
        {"By the start of the 19th century there became\na scientific interest in mapping the arctic, leading to various scientific\nexpeditions by the British Admiralty."}
      </CenterText>
      <CenterText z={90}>
        {"One such major expedition coordinated by John Barrow,\nthe Second Secretary of the British Admiralty,\nwas to finally determine the existance of the passage."}
      </CenterText>
      <CenterText z={120}>
        {"On the 19th of May 1845 the HMS Erebus and HMS Terror,\nwith a combined crew of 133, set out from England\nunder the command of Sir John Franklin"}
      </CenterText>
      <OffsetScrollSection offset={[0, -0.2, 140]}>
        <NormalizedScrollGroup
          start={0.35}
          end={0.48}
          deltaPosition={[-7, 0, 0]}>
          <Plane
            name="test"
            scale={[33,30,1]}
            position={[15, 8, -15]}>
            <meshBasicMaterial transparent attach="material" map={ship_tex} />
          </Plane>
        </NormalizedScrollGroup>
        <NormalizedScrollGroup
          start={0.35}
          end={0.48}
          deltaPosition={[-17, 0, 0]}>
          <Plane
            name="test"
            position={[-9, 4, -22]}
            scale={[22,20,1]}>
            <meshBasicMaterial transparent attach="material" map={ship_tex} />
          </Plane>
        </NormalizedScrollGroup>
        <NormalizedScrollGroup
          start={0.34}
          end={0.47}
          deltaPosition={[-0.5, 0, 3]}>
          <Plane
            name="test"
            position={[-3, -4, -7]}
            scale={[9.8,3,1]}>
            <meshBasicMaterial transparent attach="material" map={observers_tex} />
          </Plane>
        </NormalizedScrollGroup>
      </OffsetScrollSection>
      <CenterText z={180}>
        {"129 of these men were to enter the Arctic\nafter the supply ship had left for home."}
      </CenterText>
      <CenterText z={220}>
        {"None would return."}
      </CenterText>
    </OffsetScrollSection>
  )
}