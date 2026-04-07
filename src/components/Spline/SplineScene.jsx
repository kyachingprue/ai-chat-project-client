import Spline from '@splinetool/react-spline'
import './SplineScene.scss'

export default function SplineScene() {
  return (
    <div className="hero-wrapper">
      <div className="spline-bg">
          <Spline scene="https://prod.spline.design/F6af7Pj44nohTbHa/scene.splinecode" />
      </div>
    </div>
  )
}
