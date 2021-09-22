import React, { Suspense, useRef } from "react"
import { Canvas } from '@react-three/fiber';
import { Environment } from "@react-three/drei"
import Particles from './components/particles/Particles';
import Model from "./components/Models"
import Overlay from "./components/Overlay"

function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <>
      <Canvas
        shadows
        onCreated={(state) => state.events.connect(overlay.current)}
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
        <fog attach="fog" args={["black", 0.1, 50]} />
        {/* <ambientLight intensity={1} /> */}
         <Suspense fallback={null}>
           <Model scroll={scroll} />
           {/* <Environment preset="city" /> */}
           {/* <Particles count={5000}/> */}
         </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  );
}

export default App;


// export default function App() {
//   const overlay = useRef()
//   const caption = useRef()
//   const scroll = useRef(0)
//   return (
//     <>
//       <Canvas
//         shadows
//         onCreated={(state) => state.events.connect(overlay.current)}
//         raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
//         <ambientLight intensity={1} />
//         <Suspense fallback={null}>
//           <Model scroll={scroll} />
//           <Environment preset="city" />
//         </Suspense>
//       </Canvas>
//       <Overlay ref={overlay} caption={caption} scroll={scroll} />
//     </>
//   )
// }
