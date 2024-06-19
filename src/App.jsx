import { useState } from 'react' 
import Header from './pages/componentes/Header'
import Home from './pages/componentes/Home.jsx'
import About from './pages/componentes/AboutSection.jsx'
import Projetos from './pages/componentes/ProjetosSection.jsx'
import Contact from './pages/componentes/ContactSection.jsx'
import Skills from './pages/componentes/SkillSection.jsx'

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const handleNavigation = (route) => {
    setCurrentRoute(route);
  };
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projetos />
      <Skills/>
      <Contact />
    </>
  )
}
export default App