import Header from './pages/componentes/Header'
import Home from './pages/componentes/Home.jsx'
import About from './pages/componentes/AboutSection.jsx'
import Projects from './pages/componentes/ProjetosSection.jsx'
import Contact from './pages/componentes/ContactSection.jsx'
import Skills from './pages/componentes/SkillSection.jsx'

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      {/* <Skills/> */}
      <Contact />
    </>
  )
}
export default App