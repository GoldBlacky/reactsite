import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const brothersArray = ['B', 'R', 'O', 'T', 'H', 'E', 'R', 'S', '.']

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['B', 'E', 'A', 'R', 'D']}
            idx={10}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={brothersArray}
            idx={15}
          />
        </h1>
        <h2>Irgend ein Untertitel oderso</h2>
        <Link to="/contact" className="flat-button">
          Button
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
