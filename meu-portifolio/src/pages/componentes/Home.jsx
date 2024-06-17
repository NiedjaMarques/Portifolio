import iconLinkedin from '../../../app/view/icons/icons8-linkedin.svg'
import iconCurriculo from '../../../app/view/icons/icons8-curriculo.svg'
import iconGithub from '../../../app/view/icons/icons8-github.svg'
import imgPrincipal from '../../../app/view/imagens/oculosretangulo.jpg'


function Home(){
    return (
      <>
        <div className="flex items-center justify-around h-[100vh] px-4 pt-20 bg-[#D5BAA6]">

            <div className='text-center sm:text-start'>

                <h1 className="font-bold text-[#252024] text-5xl sm:text-6xl pb-2">
                    Niedja Marques
                </h1>
        
                <h2 className="text-3xl sm:text-4xl text-shadow text-[#FF4A00] pb-2">
                    Desenvolvedora Web
                </h2>
        
                <div className="flex justify-center items-center sm:justify-start py-4">

                    <a href="https://www.linkedin.com/in/niedja-marques-460823274/" target="_blank">
                        <img className='bg-[#ff48005f] transform duration-500 hover:bg-[#ff4800d2]  mx-2 rounded-full shadow-lg shadow-[#ff48004b] h-10' src={iconLinkedin} alt="logo linkedin" />
                    </a>

                    <a href="https://github.com/NiedjaMarques" target="_blank">
                        <img className='bg-[#ff48005f] transform duration-500 hover:bg-[#ff4800d2]  mx-2 rounded-full shadow-lg shadow-[#ff48004b] h-10' src={iconGithub} alt="logo Github" />
                    </a>

                    {/* BAIXAR CURRICULO */}
                    <a href="#">
                        <img className='bg-[#ff48005f] transform duration-500 hover:bg-[#ff4800d2]  mx-2 rounded-full shadow-lg shadow-[#ff48004b] h-10 p-1' src={iconCurriculo} alt="logo curriculo" />
                    </a>
                    
                </div>

            </div>

            <div className='hidden md:flex w-[40%] '>

                <img className='rounded-full shadow-lg shadow-[#252024]' src={imgPrincipal} alt="imagem principal" />

            </div>

        </div>
      </>
    );
}
  export default Home;