import React from 'react';
import iconLinkedin from '../../../app/view/icons/icons8-linkedin.svg'
import iconGithub from '../../../app/view/icons/icons8-github.svg'

const Home = () => {
    return (
      <>
        <section id='home' className="container mx-auto flex flex-col sm:flex-row items-center py-24 px-4 justify-around flex-nowrap">

            <div className='text-start pb-8 transition-all duration-500 ease'>

                <h1 className="font-bold text-4xl sm:text-5xl pb-2">
                    Niedja Marques
                </h1>
        
                <h2 className="text-2xl sm:text-3xl pb-2 font-semibold">
                    Desenvolvedora Web
                </h2>
        
                <div className="flex items-start justify-start py-4 ">

                    <a href="https://www.linkedin.com/in/niedja-marques-460823274/" target="_blank">
                        <img className=' transform duration-500 mx-2 rounded-full shadow-md shadow-azul-escuro h-10' src={iconLinkedin} alt="logo linkedin" />
                    </a>

                    <a href="https://github.com/NiedjaMarques" target="_blank">
                        <img className=' transform duration-500 mx-2 rounded-full shadow-md shadow-azul-escuro h-10' src={iconGithub} alt="logo Github" />
                    </a>
                    
                </div>

            </div>

            <div className='inline-block p-4 text-sm rounded-xl border relative transition-all duration-500 ease'>

                <div className='border-b w-full space-x-2 absolute top-2 left-0 px-4 py-2 flex'>
                    <span className='bg-verde w-4 h-4 rounded-full'></span>
                    <span className='bg-amarelo w-4 h-4 rounded-full'></span>
                    <span className='bg-rosa w-4 h-4 rounded-full'></span>
                </div>

                <div className='flex flex-col pt-6 mt-4 flex-nowrap'>
                    <span>01.<span className='ml-6'>&lt;ul&gt;</span></span>
                    <span>02.<span className='ml-10'>&lt;li&gt;<span className='text-rosa'>Javascript</span>&lt;/li&gt;</span></span>
                    <span>03.<span className='ml-10'>&lt;li&gt;<span className='text-amarelo'>React JS</span>&lt;/li&gt;</span></span>
                    <span>04.<span className='ml-10'>&lt;li&gt;<span className='text-azul-claro'>Node.js</span>&lt;/li&gt;</span></span>
                    <span>05.<span className='ml-10'>&lt;li&gt;<span className='text-verde'>PHP</span>&lt;/li&gt;</span></span>
                    <span>06.<span className='ml-10'>&lt;li&gt;<span className='text-rosa'>MySQL</span>&lt;/li&gt;</span></span>
                    <span>07.<span className='ml-10'>&lt;li&gt;<span className='text-amarelo'>Tailwind CSS</span>&lt;/li&gt;</span></span>
                    <span>08.<span className='ml-10'>&lt;li&gt;<span className='text-azul-claro'>POO</span>&lt;/li&gt;</span></span>
                    <span>09.<span className='ml-10'>&lt;li&gt;<span className='text-verde'>MVC</span>&lt;/li&gt;</span></span>
                    <span>10.<span className='ml-10'>&lt;li&gt; <span className='text-rosa'>...</span>&lt;/li&gt;</span></span>
                    <span>11.<span className='ml-6'>&lt;/ul&gt;</span></span>
                </div>

            </div>         

        </section>
      </>
    );
}
  export default Home;