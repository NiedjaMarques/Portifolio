import iconLinkedin from '../../../app/view/icons/icons8-linkedin.svg'
import iconCurriculo from '../../../app/view/icons/icons8-curriculo.svg'
import iconGithub from '../../../app/view/icons/icons8-github.svg'
import imgPrincipal from '../../../app/view/imagens/oculosretangulo.jpg'


function Home(){
    return (
      <>
        <section className="flex items-center justify-around px-4 pt-20">

            <div className='text-center sm:text-start'>

                <h1 className="font-bold text-azul-escuro text-5xl sm:text-6xl pb-2">
                    Niedja Marques
                </h1>
        
                <h2 className="text-3xl sm:text-4xl text-azul-escuro pb-2">
                    Desenvolvedora Web
                </h2>
        
                <div className="flex justify-center items-center sm:justify-start py-4">

                    <a href="https://www.linkedin.com/in/niedja-marques-460823274/" target="_blank">
                        <img className='bg-laranja-coral transform duration-500 mx-2 rounded-full shadow-md shadow-azul-escuro h-10' src={iconLinkedin} alt="logo linkedin" />
                    </a>

                    <a href="https://github.com/NiedjaMarques" target="_blank">
                        <img className='bg-laranja-coral transform duration-500 mx-2 rounded-full shadow-md shadow-azul-escuro h-10' src={iconGithub} alt="logo Github" />
                    </a>

                    {/* BAIXAR CURRICULO */}
                    <a href="#" target="_blank">
                        <img className='bg-laranja-coral transform duration-500 mx-2 rounded-full shadow-md shadow-azul-escuro h-10 p-1' src={iconCurriculo} alt="logo curriculo" />
                    </a>
                    
                </div>

            </div>

            <div className='hidden md:flex w-[40%]'>

                <img className='rounded-full shadow-lg shadow-azul-escuro' src={imgPrincipal} alt="imagem principal" />

            </div>

        </section>
      </>
    );
}
  export default Home;