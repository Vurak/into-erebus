import { useState } from 'react'
import { useCursor } from '../hooks'
import { ArrowRight, ChevronUp, ChevronDown } from '@icons'
import './introduction.css'

const content = [
  {
    text: "Into Erebus",
    title: true
  },
  {
    text: "For a while it had been thought there might be a route to the orient over the Americas, via the Arctic. In 1745 the British Admiralty promised a £20,000 prize for whoever discovered this passage."
  }
]

const Slide = ({s}) => {
  return(
    <p className={`${content[s].title ? 'intro-title' : ''}`}>
      {content[s].text}
    </p>
  )
}

export const Introduction = () => {
  const [slide, setSlide] = useState(0)
  const { setClickable } = useCursor()

  const handleClick = (add=true) => {
    setSlide(s => {
      console.log(s)
      if (add && s < content.length-1) return s+1
      else if (!add && s > 0) return s-1
      return s
    })
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
      <div
        className="intro-text"
        onClick={handleClick}
        onMouseEnter={() => setClickable(true)}
        onMouseLeave={() => setClickable(false)}>
        <Slide s={slide}/>
      </div>
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