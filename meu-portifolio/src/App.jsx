//Arquivo direcionado para as rotas
// Paleta de cores:
// #164926 - verde
// #06A1F5 - azul
// #252024 - quase preto
// #D5BAA6 - bege
// #A35F20 - marrom claro *
// #562300 - marrom escuro *
// #FF4A00 - laranja - 

import { useState } from 'react' 
import Header from './pages/componentes/Header'
import Home from './pages/componentes/Home.jsx'
import About from './pages/componentes/AboutSection.jsx'
//import Experience from './pages/componentes/ExperienceSection.jsx'
import Projetos from './pages/componentes/ProjetosSection.jsx'
import Contact from './pages/componentes/ContactSection.jsx'
import Skills from './pages/componentes/SkillSection.jsx'



function App() {
  return (
    <>
    <h1 className='bg-[#b85832]'></h1>
      <Header />
      {/* scrooll personalizado /// fonte para o site // imagens aparecendo na tela // rotas dos links*/}
      <Home />
      <About />
      <Projetos />
      <Skills/>
      <Contact />
      {/* Formulario com mensagem igual o do matheus */}
    </>
  )
}

export default App
