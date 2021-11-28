import { useCursor } from '../hooks'
import { ArrowRight } from '../icons'
import './introduction.css'

export const Introduction = () => {
  const { setClickable } = useCursor()

  return (
    <div className="intro-container">
      <div className="intro-text" onMouseEnter={() => {console.log("clickable true"); setClickable(true)}} onMouseLeave={() => setClickable(false)}>
        <h1>TESTING !2323 saddasd as</h1>
      </div>
      {/* <div className="continue-button">
        <ArrowRight/>
      </div> */}
    </div>
  )
}