import { useState } from 'react' 
import Header from './pages/componentes/Header'
import Home from './pages/componentes/Home.jsx'
import About from './pages/componentes/AboutSection.jsx'
//import Experience from './pages/componentes/ExperienceSection.jsx'
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
    <h1 className='bg-[#b85832]'></h1>
    <Header onNavigate={handleNavigation} />
    {currentRoute === 'home' && <Home />}
      {/* scrooll personalizado /// fonte para o site // imagens aparecendo na tela // rotas dos links // procurar rolagem suave // aplicar container e arrumar as sections html semantico*/}
      {/* <Home /> */}
      <About />
      <Projetos />
      <Skills/>
      <Contact />
      {/* Formulario com mensagem igual o do matheus */}
    </>
  )
}

export default App
