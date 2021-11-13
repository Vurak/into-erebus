import * as THREE from "three"
import { useContext, useEffect, useRef, useState } from "react"
import OffsetScrollSection from "../scroll/OffsetScrollSection"
import { Html, Text, Plane, useAspect } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { NormalizedScrollGroup } from "../scroll/NormalizedScrollGroup"

import TargetContext from "../../context/TargetContext"
import { Vector3 } from "three"

const Daguerreotype = ({position, scale, texture, name}) => {
  const { target, setTarget } = useContext(TargetContext)
  
  const handleClick = (e) => {
    if (e.object.name === "test") {
      setTarget(e.object.localToWorld(new Vector3(0,-0.5,10)))
    }
  }
  
  return(
    <Plane
    onClick={handleClick}
    name="test"
    scale={[3, 4, 1]}
    position={position}>
    <meshBasicMaterial attach="material" map={texture} />
    <Text 
      position={[0,-0.6,0]}
      color="white"
      letterSpacing={0.2}
      fontSize={0.1}
      font="/fonts/imfell-pica-italic.ttf">
      {name}
    </Text>
  </Plane>
  )
}

export const Daguerreotypes = () => {
  const [description, setDescription] = useState(false)

  const { target, setTarget } = useContext(TargetContext)
  const targetRef = useRef(null)

  const handleClick = (e) => {
    console.log(e.object.localToWorld(new Vector3(0,0,6)))
    setTarget(e.object.localToWorld(new Vector3(0,0,10)))
  }
  const [crozier, franklin, fitzjames, gore, reid, le_vesconte, fairholme, des_voeux] = useLoader(THREE.TextureLoader, [
    '/images/portraits/crozier.jpg',
    '/images/portraits/franklin.jpg',
    '/images/portraits/fitzjames.jpg',
    '/images/portraits/gore.jpg',
    '/images/portraits/reid.jpg',
    '/images/portraits/le-vesconte.jpg',
    '/images/portraits/fairholme.jpg',
    '/images/portraits/des-voeux.jpg'
  ])

  return (
    <OffsetScrollSection offset={[0, 0, 90]}>
      <NormalizedScrollGroup
        start={0}
        end={0.21}
        deltaPosition={[0, 0, 0]}
      >
        <Plane
          onClick={handleClick}
          name="test"
          scale={[3, 4, 1]}
          position={[9, 0, -20]}>
          <meshBasicMaterial attach="material" color='#ffffff' />
        </Plane>
        <Plane
          onClick={handleClick}
          name="test"
          scale={[3, 4, 1]}
          position={[4, 7, -5]}>
          <meshBasicMaterial attach="material" color='#ffffff' />
        </Plane>
        <Plane
          onClick={handleClick}
          name="test"
          scale={[3, 4, 1]}
          position={[-9, 0, 0]}>
          <meshBasicMaterial attach="material" color='#ffffff' />
        </Plane>
        <Plane
          onClick={handleClick}
          name="test"
          scale={[3, 4, 1]}
          position={[-7, 4, -25]}>
          <meshBasicMaterial attach="material" color='#ffffff' />
        </Plane>
        <Plane
          onClick={handleClick}
          name="test"
          scale={[3, 4, 1]}
          position={[-6, -4, -10]}>
          <meshBasicMaterial attach="material" color='#ffffff' />
        </Plane>
      </NormalizedScrollGroup>
    </OffsetScrollSection>
  )
}