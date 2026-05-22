import { Routes, Route } from 'react-router-dom'
import Header from './pages/componentes/Header'
import Home from './pages/componentes/Home.jsx'
import About from './pages/componentes/AboutSection.jsx'
import Projects from './pages/componentes/ProjetosSection.jsx'
import Skills from './pages/componentes/SkillsSection.jsx'
import Contact from './pages/componentes/ContactSection.jsx'
import MainLayout from './pages/componentes/MainLayout.jsx'

const App = () => {
  return (
    <MainLayout>
      <Header/>
      <Home/>
      {/* <Routes>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>      */}
      <About/>
      <Skills/>
      {/* <Contact/>  */}
    </MainLayout>
  )
}
export default App