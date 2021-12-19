import React, { useEffect, useRef, useState } from "react"

import Overlay from "./components/Overlay"
import Cursor from "./components/Cursor";
import CanvasWrapper from "./components/Canvas";

import ScrollContext from "./context/ScrollContext";
import DepthContext from "./context/DepthContext";
import TargetContext from "./context/TargetContext";
import CursorContext from "./context/CursorContext";
import { Introduction } from "./components/overlay/Introduction";
import { CSSTransition, Transition } from "react-transition-group";

import './components/overlay/introduction.css'

import { preloadFont } from "troika-three-text";

import {
  imfell_pica,
  imfell
} from '@fonts'

let fontsLoaded = 0
let requiredFonts = 2

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [target, setTarget] = useState(null)
  const [cursorProps, setCursorProps] = useState(null)

  const [loading, setLoading] = useState(true)

  const scroll_value = {scrollProgress, setScrollProgress}
  const target_value = {target, setTarget}
  const cursor_value = {cursorProps, setCursorProps}

  const overlay = useRef()
  const caption = useRef()

  const checkLoadedFonts = () => {
    console.log(fontsLoaded)
    if (fontsLoaded >= requiredFonts)
      setLoading(false)
  }
  
  // Load fonts
  useEffect(() => {
    preloadFont({
      font: imfell_pica,
      characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,;',
      sdfGlyphSize: 16
    }, ({timings, sdfTexture}) => {
      console.log("preloaded imfell_pica", sdfTexture, timings)
      fontsLoaded++
      checkLoadedFonts()
    })

    preloadFont({
      font: imfell,
      characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,;',
      sdfGlyphSize: 32
    }, () => {
      console.log("preloaded imfell")
      fontsLoaded++
      checkLoadedFonts()
    })
  }, [])
  
  return (
    <div className="body-container">
      <ScrollContext.Provider value={scroll_value}>
        <DepthContext.Provider value={200}>
          <TargetContext.Provider value={target_value}>
            <Transition>
              <CSSTransition
                in={loading}
                unmountOnExit
                timeout={500}
                // addEndListener={(node, done) => node.addEventListener("transitionend", () => setTimeout(() => done,200))}
                classNames="slide">
                <Introduction/>
              </CSSTransition>
            </Transition>
            <CanvasWrapper overlay={overlay} loading={loading} setLoading={setLoading}/>
            <Overlay ref={overlay} caption={caption} />
            <CursorContext.Provider value={cursor_value}>
              <Cursor/>
            </CursorContext.Provider>
          </TargetContext.Provider>
        </DepthContext.Provider>
      </ScrollContext.Provider>
    </div>
  );
}

export default App;