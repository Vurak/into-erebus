import { Plane, Text } from '@react-three/drei'
import {
  imfell,
  imfell_pica,
} from '@fonts'



export const CenterText = ({ z, font=imfell_pica, children, size=1 }) => {
  return <Text 
    position={[0,0,-z]}
    color="white"
    letterSpacing={0.2}
    fontSize={size || 1}
    sdfGlyphSize={16}
    font={font}
    textAlign="center">
    {children}
  </Text>
}

export const PlaneImage = ({ image, position, scale }) => {
  return (
    <Plane
      scale={scale}
      position={position}>
      <meshBasicMaterial attach="material" map={image} />
    </Plane>
  )
}