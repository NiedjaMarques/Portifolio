import Header from './pages/componentes/Header'
import Home from './pages/componentes/Home.jsx'
import About from './pages/componentes/AboutSection.jsx'
import Projects from './pages/componentes/ProjetosSection.jsx'
//import Proj from './pages/componentes/ProjSection.jsx'
import Contact from './pages/componentes/ContactSection.jsx'
import MainLayout from './pages/componentes/MainLayout.jsx'

const App = () => {
  return (
    <>
      <MainLayout>
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        {/* <Proj/> */}
        <Contact />
      </MainLayout>
    </>
  )
}
export default App