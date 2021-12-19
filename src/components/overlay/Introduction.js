import { forwardRef, Suspense, useEffect, useState } from 'react'
import { useCursor } from '../hooks'
import { ArrowRight, ChevronUp, ChevronDown } from '@icons'
import './introduction.css'
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group'
import { SpinnerInfinity } from 'spinners-react'

const content = [
  {
    id: 1,
    text: "Into Erebus",
    title: true
  },
  {
    id: 2,
    text: "For a while it had been thought there might be a route to the orient over the Americas, via the Arctic. In 1745 the British Admiralty promised a £20,000 prize for whoever discovered this passage."
  },
  {
    id: 3,
    text: "On the 19th of May 1845 HMS Erebus and HMS Terror leave Britain"
  }
]

const StartButton = ({ setShowIntro }) => {
  const { setClickable } = useCursor()

  return (
    <div className="start-button" onClick={() => setShowIntro(false)} onMouseEnter={() => setClickable(true)} onMouseLeave={() => setClickable(false)}>
      start
    </div>
  )
}

let start = 0

export const Introduction = forwardRef(({ loading, setShowIntro }, ref) => {


  // Load time
  useEffect(() => {
    start = new Date().getTime()
    console.log("showed up")
    return () => {
      console.log("went away", new Date().getTime() - start)
    }
  }, [])

  return (
    <div className="intro-container" ref={ref}>
      {/* <div
        className="slide-arrow slide-arrow-top"
        onMouseEnter={() => setClickable(true)}
        onMouseLeave={() => setClickable(false)}
        onClick={() => handleClick(false)}>
        <ChevronUp/>
      </div> */}

      <div className="slide-container">
        <p className='intro-title'>
          Into Erebus
        </p>
        <div className="loading-button-container">
          <SwitchTransition>
            <CSSTransition
              key={loading}
              timeout={400}
              classNames="slide">
              {loading 
              ? <SpinnerInfinity
                  key="1"
                  size={150}
                  thickness={30}
                  speed={40}
                  color="#fff"
                  secondaryColor="rgb(56, 56, 56)"/>
              : <StartButton
                  setShowIntro={setShowIntro}/>}
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </div>
  )
})