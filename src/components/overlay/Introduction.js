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

const TitleSlide = () => {
  return (
    <>
      <div className="slide-container">
          <p className='intro-title'>
            Into Erebus
          </p>
          <SpinnerInfinity
            size={150}
            thickness={30}
            speed={40}
            color="#fff"
            secondaryColor="rgb(56, 56, 56)"/>
      </div>
    </>
  )
}

let start = 0

export const Introduction = forwardRef(({ setShowIntro }, ref) => {
  const [slide, setSlide] = useState(0)
  const { setClickable } = useCursor()

  const handleClick = (add=true) => {
    setTimeout(() => {
      setSlide(s => {
        console.log(s)
        if (add && s < content.length-1) return s+1
        else if (!add && s > 0) return s-1
        return s
      })
    }, 500)
  }

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
        <SpinnerInfinity
          size={150}
          thickness={30}
          speed={40}
          color="#fff"
          secondaryColor="rgb(56, 56, 56)"/>
      </div>
      {/* <SwitchTransition>
        <CSSTransition
          key={content[slide].id}
          timeout={500}
          addEndListener={(node, done) => node.addEventListener("transitionend", () => setTimeout(() => done,200))}
          classNames="slide"
          className="intro-text"
          >
          <Slide s={content[slide]}/>
        </CSSTransition>
      </SwitchTransition> */}
      {/* <div
        className="slide-arrow slide-arrow-bot"
        onMouseEnter={() => setClickable(true)}
        onMouseLeave={() => setClickable(false)}
        onClick={() => handleClick(true)}>
        <ChevronDown/>
      </div> */}
      {/* <div className="continue-button">
        <ArrowRight/>
      </div> */}
    </div>
  )
})