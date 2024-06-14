import iconLinkedin from '../../../app/view/icons/icons8-linkedin.svg'
import iconWhatsapp from '../../../app/view/icons/icons8-whatsapp.svg'
import iconGithub from '../../../app/view/icons/icons8-github.svg'
import imgPrincipal from '../../../app/view/imagens/oculosretangulo.jpg'


function Home(){
    return (
      <>
        <div className="pt-32 text-center flex items-center justify-center">
            <div className='sm:text-start'>
                <h1 className="font-bold text-[#252024] text-4xl sm:text-6xl pb-1">
                    Niedja Marques
                </h1>
        
                <h2 className="text-3xl sm:text-4xl text-shadow text-[#FF4A00] pb-4">
                    Desenvolvedora Web
                </h2>
        
                <div className="flex justify-center items-center sm:justify-start py-4 md:pt-2">
                    <a href="#" className="">
                        <img className='bg-[#ff48005f] m-2 rounded-full shadow-lg shadow-[#ff48004b]' src={iconLinkedin} alt="logo linkedin" />
                    </a>
                    <a href="#" className="">
                        <img className='bg-[#ff48005f] m-2 rounded-full shadow-lg shadow-[#ff48004b]' src={iconGithub} alt="logo Github" />
                    </a>
                    <a href="#" className="">
                        <img className='bg-[#ff48005f] m-2 rounded-full shadow-lg shadow-[#ff48004b]' src={iconWhatsapp} alt="logo Whatsapp" />
                    </a>
                </div>
            </div>  
            <div className='hidden md:flex w-2/5 justify-center ml-10 mb-10'>
                <img className='rounded-full shadow-lg shadow-[#252024]' src={imgPrincipal} alt="" />
            </div>
        </div>
      </>
    );
  }
  export default Home;
  
  // Paleta de cores:
  // #164926 - verde
  // #06A1F5 - azul
  // #252024 - quase preto
  // #D5BAA6 - bege
  // #A35F20 - marrom claro
  // #562300 - marrom escuro
  // #FF4A00 - laranja - 