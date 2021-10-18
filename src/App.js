import React, { useEffect, useRef } from "react"
import Overlay from "./components/Overlay"
import CanvasWrapper from "./components/Canvas";
import { useState } from "react";

import ScrollContext from "./context/ScrollContext";
import DepthContext from "./context/DepthContext";


function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const value = {scrollProgress, setScrollProgress}
  const overlay = useRef()
  const caption = useRef()

  useEffect(() => {
    console.log(scrollProgress)
  }, [scrollProgress])

  return (
    <div className="body-container">
      <ScrollContext.Provider value={value}>
        <DepthContext.Provider value={200}>
          <CanvasWrapper overlay={overlay} />
          <Overlay ref={overlay} caption={caption} />
        </DepthContext.Provider>
      </ScrollContext.Provider>
    </div>
  );
}

export default App;