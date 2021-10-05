import React, { createContext, Suspense, useRef } from "react"
import Canvas from "./components/Canvas";
import { Environment } from "@react-three/drei"
import Particles from './components/particles/Particles';
import Model from "./components/Models"
import Overlay from "./components/Overlay"
import { useState } from "react";
import ScrollContext from "./context/ScrollContext";


function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  const overlay = useRef()
  const caption = useRef()

  return (
    <div className="body-container">
      <ScrollContext.Provider value={{scrollProgress, setScrollProgress}}>
        <Canvas overlay={overlay} />
        <Overlay ref={overlay} caption={caption} />
      </ScrollContext.Provider>
    </div>
  );
}

export default App;