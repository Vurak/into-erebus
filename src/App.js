import React, { Suspense, useRef } from "react"
import { Canvas } from '@react-three/fiber';
import { Environment } from "@react-three/drei"
import Particles from './components/particles/Particles';
import Model from "./components/Models"
import Overlay from "./components/Overlay"
import { useState } from "react";
import ScrollSections from "./components/ScrollSections";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  return (
    <>
      <div className="body-container">
        <Canvas
          shadows
          onWheel={(e) => {
            scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
            caption.current.innerText = scroll.current.toFixed(2)
            setScrollProgress(scroll.current)
          }}
          onCreated={(state) => state.events.connect(overlay.current)}
          raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
          <fog attach="fog" args={["black", 0.1, 50]} />
          {/* <ambientLight intensity={1} /> */}
          <Suspense fallback={null}>
            <ScrollSections scroll={scroll} />
            {/* <Model scroll={scroll} /> */}
            {/* <Environment preset="city" /> */}
            {/* <Particles count={5000}/> */}
          </Suspense>
        </Canvas>
        <Overlay ref={overlay} caption={caption} scroll={scroll} />
      </div>
    </>
  );
}

export default App;