import React, { Suspense, useContext, useRef } from "react"
import { Canvas } from '@react-three/fiber';
import ScrollSections from "./ScrollSections";
import ScrollCamera from "./scroll/ScrollCamera"
import ScrollContext from "../context/ScrollContext";


export default ({overlay}) => {
  // const [scrollProgress, setScrollProgress] = useState(0)

  const { scrollProgress, setScrollProgress } = useContext(ScrollContext)

  return (
          <Canvas
            shadows
            onWheel={(e) => {
              // setScrollProgress(e.target.scrollTop / (e.target.scrollHeight - window.innerHeight))
              // scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
              // caption.current.innerText = scroll.current.toFixed(2)
              setScrollProgress(e.target.scrollTop / (e.target.scrollHeight - window.innerHeight))
            }}
            onCreated={(state) => state.events.connect(overlay.current)}
            raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
            <fog attach="fog" args={["black", 0.1, 50]} />
            {/* <ambientLight intensity={1} /> */}
            <Suspense fallback={null}>
              <ScrollCamera scroll={scrollProgress} />
              <ScrollSections scroll={scrollProgress} />
              {/* <Model scroll={scroll} /> */}
              {/* <Environment preset="city" /> */}
              {/* <Particles count={5000}/> */}
            </Suspense>
          </Canvas>
  );
}

// export default Canvas;