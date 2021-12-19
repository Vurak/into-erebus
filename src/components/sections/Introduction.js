import OffsetScrollSection from "../scroll/OffsetScrollSection"
import { Text } from "@react-three/drei"

import {
  imfell_pica
} from '@fonts'

export const Introduction = () => {
  return (
    <OffsetScrollSection offset={[0, 0, 30]}>
      <Text 
        position={[0,0,0]}
        color="white"
        letterSpacing={0.2}
        fontSize={1}
        sdfGlyphSize={16}
        font={imfell_pica}
        textAlign="center"
        // onBeforeRender={() => console.log("test")}
        onSync={({_textRenderInfo}) => {console.log(_textRenderInfo)}}>
        {"For a while it had been thought there might be a route\nto the orient over the Americas via the Arctic."}
        {/* // In 1745 the British Admiralty promised a £20,000 prize for whoever discovered this passage."} */}
      </Text>
    </OffsetScrollSection>
  )
}