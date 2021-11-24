import * as THREE from "three"
import { useContext, useEffect, useRef, useState } from "react"
import OffsetScrollSection from "../scroll/OffsetScrollSection"
import { Html, Text, Plane, useAspect } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import { NormalizedScrollGroup } from "../scroll/NormalizedScrollGroup"

import TargetContext from "../../context/TargetContext"
import { Vector3 } from "three"

const Daguerreotype = ({position, texture, name, rank}) => {
  const { target, setTarget } = useContext(TargetContext)
  const dagRef = useRef(null)
  const handleClick = (e) => {
    if (e.object.name === "test") {
      setTarget(e.object.localToWorld(new Vector3(0,-0.5,10)))
    }
  }

  useFrame((state) => {
    const et = state.clock.elapsedTime
    dagRef.current.position.y = position[1] + Math.sin((et + Math.abs(position[2]/10) * 2000) / 2) / 5
    dagRef.current.rotation.x = Math.sin((et + Math.abs(position[2]/10) * 2000) / 1) / 30
    dagRef.current.rotation.y = Math.cos((et + Math.abs(position[2]/10) * 2000) / 1) / 30
    dagRef.current.rotation.z = Math.sin((et + Math.abs(position[2]/10) * 2000) / 1) / 30
  })
  
  return(
    <Plane
    onClick={handleClick}
    name="test"
    scale={[3, 4, 1]}
    position={position}
    ref={dagRef}>
    <meshBasicMaterial attach="material" map={texture} />
    <Text 
      position={[0,-0.6,0]}
      color="white"
      letterSpacing={0.2}
      fontSize={0.1}
      font="./fonts/imfell-pica.ttf">
      {name}
    </Text>
    <Text 
      position={[0,-0.72,0]}
      color="white"
      letterSpacing={0.2}
      fontSize={0.08}
      font="./fonts/imfell.ttf">
      {rank.toUpperCase()}
    </Text>
  </Plane>
  )
}

export const Daguerreotypes = () => {

  const [
    crozier,
    franklin,
    fitzjames,
    gore,
    reid,
    le_vesconte,
    fairholme,
    des_voeux,
    sargent,
    stanley,
    osmer,
    collins,
    couch
  ] = useLoader(THREE.TextureLoader, [
    './images/portraits/crozier.jpg',
    './images/portraits/franklin.jpg',
    './images/portraits/fitzjames.jpg',
    './images/portraits/gore.jpg',
    './images/portraits/reid.jpg',
    './images/portraits/le-vesconte.jpg',
    './images/portraits/fairholme.jpg',
    './images/portraits/des-voeux.jpg',
    './images/portraits/sargent.jpg',
    './images/portraits/stanley.jpg',
    './images/portraits/osmer.jpg',
    './images/portraits/collins.jpg',
    './images/portraits/couch.jpg'
  ])

  return (
    <OffsetScrollSection offset={[0, 0, 80]}>
      <Text 
        position={[0,0,0]}
        color="white"
        letterSpacing={0.2}
        fontSize={1}
        font="./fonts/imfell-pica.ttf">
        CREW
      </Text>
      <Daguerreotype
        position={[-6, 0, -30]}
        texture={franklin}
        name="Sir John Franklin"
        rank="Captain"
      />
      <Daguerreotype
        position={[4, 4, -40]}
        texture={crozier}
        name="Francis Crozier"
        rank="Captain"
      />
      <Daguerreotype
        position={[-2, -3, -50]}
        texture={gore}
        name="Graham Gore"
        rank="Lieutenant"
      />
      <Daguerreotype
        position={[-6, 2, -60]}
        texture={reid}
        name="James Reid"
        rank="Ice Master"
      />
      <Daguerreotype
        position={[4, 0, -70]}
        texture={des_voeux}
        name="Charles Des Voeux"
        rank="Mate"
      />
      <Daguerreotype
        position={[-6, 4, -80]}
        texture={fitzjames}
        name="James Fitzjames"
        rank="Commander"
      />
      <Daguerreotype
        position={[-4, -2, -90]}
        texture={fairholme}
        name="James Fairholme"
        rank="Lieutenant"
      />
      <Daguerreotype
        position={[4, 4, -100]}
        texture={le_vesconte}
        name="Henry Le Vesconte"
        rank="Lieutenant"
      />
      <Daguerreotype
        position={[-4, 5, -110]}
        texture={sargent}
        name="Robert Sargent"
        rank="Mate"
      />
      <Daguerreotype
        position={[3, -1, -120]}
        texture={stanley}
        name="Stephen Stanley"
        rank="Surgeon"
      />
      <Daguerreotype
        position={[-5, -3, -130]}
        texture={osmer}
        name="Charles Osmer"
        rank="Paymaster & Purser"
      />
      <Daguerreotype
        position={[3, 4, -140]}
        texture={collins}
        name="Henry Collins"
        rank="Second Master"
      />
      <Daguerreotype
        position={[-3, 2, -150]}
        texture={couch}
        name="Edward Couch"
        rank="Mate"
      />
    </OffsetScrollSection>
  )
}