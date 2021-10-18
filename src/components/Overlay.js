import { useFrame } from "@react-three/fiber"
import React, { forwardRef, useContext, useState } from "react"

import ScrollContext from "../context/ScrollContext"
import { timelineTicks } from "../store/store"

const Overlay = forwardRef(({ caption }, ref) => {
  const { scrollProgress , setScrollProgress } = useContext(ScrollContext)
  return (
    <>
      <div
        ref={ref}
        onScroll={(e) => {
          const scroll = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
          caption.current.innerText = scroll.toFixed(2)
          setScrollProgress(scroll)
        }}
        className="scroll">
        <div className="timeline">
          {timelineTicks.map((tick, i) => {
            const pos = 50 - 300*((scrollProgress)-((tick.year - 1844) / 5));
            const opa = -60*((scrollProgress)-((tick.year - 1844) / 5))**2+1;
            return (
              <div key={i} className="timeline-section" style={{ top: `${pos}%`, opacity: `${opa}`}}>
                <div className="timeline-tick" style={{ height: `100%` }}></div>
                <span className="timeline-tick-title">{tick.year} - {tick.title}</span><br/>
              </div>
            )
          })}
        </div>

        {/* <div style={{ height: "100vh" }}>
          <div className="dot">
            <h1>headset</h1>
            Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.
          </div>
        </div> */}
        <div style={{ height: `6000vh` }}/>
        <span className="caption" ref={caption}>
          0.00
        </span>

      </div>
    </>
  )
})

export default Overlay