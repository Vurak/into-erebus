import React, { Suspense, useContext, useRef } from "react"
import { Canvas } from '@react-three/fiber';
import ScrollSections from "./ScrollSections";
import ScrollCamera from "./scroll/ScrollCamera"

import ScrollContext from "../context/ScrollContext";
import TargetContext from "../context/TargetContext";

const CanvasWrapper = ({overlay}) => {
  const value_scroll = useContext(ScrollContext)
  const value_target = useContext(TargetContext)
  
  return (
    <Canvas
      shadows
      onCreated={(state) => state.events.connect(overlay.current)}
      raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
      <fog attach="fog" args={["black", value_target.target ? 10 : 25, value_target.target ? 20 : 50]} />
      <color attach="background" args={["black"]} />
      {/* <ambientLight intensity={1} /> */}
      <Suspense fallback={null}>
        <ScrollContext.Provider value={value_scroll}>
          <TargetContext.Provider value={value_target}>
            <ScrollCamera />
            <ScrollSections />
            {/* <Model scroll={scroll} /> */}
            {/* <Environment preset="city" /> */}
            {/* <Particles count={5000}/> */}
          </TargetContext.Provider>
        </ScrollContext.Provider>
      </Suspense>
    </Canvas>
  );
}

export default CanvasWrapper;