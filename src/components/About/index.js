import './index.scss'
import AnimatedLetters from './../AnimatedLetters/index'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Über uns'.split('')}
            idx={5}
          />
        </h1>
        <p>
          Herzlich willkommen bei Beard Brothers – dem ultimativen Freizeitclub
          für Gleichgesinnte, die die Leidenschaft für Abenteuer und
          Gemeinschaft teilen. Hier bist du nicht nur Mitglied, sondern ein Teil
          unserer wachsenden Bruderschaft, die sich darauf freut, gemeinsam
          unvergessliche Momente zu erleben und die Freuden des Lebens in vollen
          Zügen zu genießen.
        </p>
        <p>
          Die Geschichte von Beard Brothers beginnt mit dir. Seit unserem
          Gründungsjahr haben wir uns zu einer vielfältigen Gemeinschaft von
          Abenteurern entwickelt, die sich der Mission verschrieben haben, das
          Beste aus jedem Moment herauszuholen. Deine Interessen und
          Leidenschaften sind der Antrieb für unsere Aktivitäten, sei es
          Outdoor-Abenteuer, kulturelle Erkundungen oder entspannte Treffen.
          Hier kannst du neue Erfahrungen sammeln und echte Verbindungen zu
          anderen Mitgliedern knüpfen.
        </p>
        <p>
          In Beard Brothers glauben wir an die Kraft der Gemeinschaft und die
          Bedeutung von echten Verbindungen. Du bist nicht nur ein Mitglied,
          sondern ein "Brother" oder eine "Sister", ein wichtiger Teil unserer
          lebendigen Gemeinschaft. Deine Teilnahme an unseren Aktivitäten und
          Veranstaltungen schafft nicht nur Erinnerungen, sondern auch
          langanhaltende Freundschaften. Du bist herzlich eingeladen, Teil
          dieser einzigartigen Reise zu sein – lass uns gemeinsam das Abenteuer
          des Lebens feiern!
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
