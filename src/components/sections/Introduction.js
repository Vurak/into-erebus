import OffsetScrollSection from "../scroll/OffsetScrollSection"
import { Text } from "@react-three/drei"

import {
  imfell_pica
} from '@fonts'
import { CenterText } from "./utils"

export const Introduction = () => {
  return (
    <OffsetScrollSection offset={[0, 0, 30]}>
      <CenterText z={0}>
        {"For a while it had been thought there might be a route\nto the orient over the Americas via the Arctic."}
      </CenterText>
      <CenterText z={30}>
        {"In 1745 the British Admiralty promised a £20,000 prize\nfor whoever discovered this passage."}
      </CenterText>
    </OffsetScrollSection>
  )
}