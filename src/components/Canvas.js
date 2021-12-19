import React, { Suspense, useContext, useEffect, useRef } from "react"
import { Canvas } from '@react-three/fiber';
import ScrollSections from "./ScrollSections";
import ScrollCamera from "./scroll/ScrollCamera"

import ScrollContext from "../context/ScrollContext";
import TargetContext from "../context/TargetContext";
import { Introduction } from "./overlay/Introduction";
import { preloadFont } from "troika-three-text";

import {
  yujiboku,
  imfell
} from '@fonts'

let fontsLoaded = 0
let requiredFonts = 2

const CanvasWrapper = ({ overlay, setLoading }) => {
  const value_scroll = useContext(ScrollContext)
  const value_target = useContext(TargetContext)
  
  const checkLoadedFonts = () => {
    console.log(fontsLoaded)
    if (fontsLoaded >= requiredFonts)
      setLoading(false)
  }
  
  // Load fonts
  useEffect(() => {
    preloadFont({
      font: yujiboku,
      characters: 'abcdefghijklmnopqrstuvwxyz',
    }, () => {
      console.log("preloaded yujiboku")
      fontsLoaded++
      checkLoadedFonts()
    })

    preloadFont({
      font: imfell,
      characters: 'abcdefghijklmnopqrstuvwxyz',
    }, () => {
      console.log("preloaded imfell")
      fontsLoaded++
      checkLoadedFonts()
    })
  }, [])

  return (
    <Canvas
      shadows
      onCreated={(state) => state.events.connect(overlay.current)}
      raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
      onLoad={() => cosole.log("loaded scene")}>
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