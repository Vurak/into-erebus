import { useState } from 'react'
import { useCursor } from '../hooks'
import { ArrowRight, ChevronUp, ChevronDown } from '@icons'
import './introduction.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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
    text: "asdasdasdasda. In 1745 the British Admiralty promised a £20,000 prize for whoever discovered this passage."
  }
]

const Slide = ({s}) => {
  return(    
    <p className={`${s.title ? 'intro-title' : ''}`}>
      {s.text}
    </p>
  )
}

export const Introduction = () => {
  const [slide, setSlide] = useState(0)
  const [slideAnimation, setSlideAnimation] = useState(null)
  const { setClickable } = useCursor()

  const handleClick = (add=true) => {
    setSlideAnimation(add ? 'out' : 'in')
    setTimeout(() => {
      // setSlideAnimation(add ? 'in' : 'out')
      // setSlideAnimation(null)
      setSlide(s => {
        console.log(s)
        if (add && s < content.length-1) return s+1
        else if (!add && s > 0) return s-1
        return s
      })
    }, 500)
  }

  return (
    <div className="intro-container">
      
      <div
        className="slide-arrow slide-arrow-top"
        onMouseEnter={() => setClickable(true)}
        onMouseLeave={() => setClickable(false)}
        onClick={() => handleClick(false)}>
        <ChevronUp/>
      </div>
      <TransitionGroup>
        <CSSTransition
          key={content[slide].id}
          in
          timeout={1000}
          classNames="slide"
          className="intro-text">
          <Slide s={content[slide]}/>
        </CSSTransition>
      </TransitionGroup>
      
      {/* <div
        className={`slide-content ${slideAnimation ? (slideAnimation == 'in' ? 'slide-enter-top' : 'slide-enter-bot') : ''}`}
        onClick={handleClick}
        onMouseEnter={() => setClickable(true)}
        onMouseLeave={() => setClickable(false)}>
        <Slide s={slide}/>
      </div> */}
      <div
        className="slide-arrow slide-arrow-bot"
        onMouseEnter={() => setClickable(true)}
        onMouseLeave={() => setClickable(false)}
        onClick={() => handleClick(true)}>
        <ChevronDown/>
      </div>
      {/* <div className="continue-button">
        <ArrowRight/>
      </div> */}
    </div>
  )
}