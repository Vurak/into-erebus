import { Text } from '@react-three/drei'
import {
  imfell,
  imfell_pica,
} from '@fonts'



export const CenterText = ({ z, font=imfell_pica, children }) => {
  return <Text 
    position={[0,0,-z]}
    color="white"
    letterSpacing={0.2}
    fontSize={1}
    sdfGlyphSize={16}
    font={font}
    textAlign="center">
    {children}
  </Text>
}