import React from 'react';
import imgEu from '../../../app/view/imagens/cabelolongoproxxima.jpg'

function About(){
    return(
        <>
            <section className="container mx-auto px-4" id='about'>

                <div className="flex flex-col items-center justify-around sm:flex-row sm: transition-all duration-500 ease">

                    <div className="pb-5 text-start sm:ml-4 sm:w-1/2 transition-all duration-500 ease leading-relaxed">

                        <h1 className="text-3xl sm:text-4xl font-bold transition-all duration-500 ease py-4">
                            <span className='text-amarelo'>02.</span>Sobre mim
                        </h1>

                        <p className="py-2 font-medium">
                            Olá! Meu nome é Niedja Marques, sou uma desenvolvedora web em transição de carreira. Estou sempre buscando aprimorar minhas habilidades tanto em front-end quanto em back-end. Tenho experiência sólida em HTML, CSS, JavaScript, React JS e Tailwind CSS para desenvolver interfaces intuitivas e responsivas.
                        </p>

                        <p className='py-2 font-medium'>
                            No back-end, possuo habilidades em PHP, Programação Orientada a Objetos (POO) e aplicação do padrão Model-View-Controller (MVC) para otimização de desempenho, além do gerenciamento de bancos de dados MySQL.
                        </p>
                                                
                    </div>                    

                    <div className='inline-block p-4 text-sm rounded-xl border relative transition-all duration-500 ease'>

                        <div className='border-b w-full space-x-2 absolute top-2 left-0 px-4 py-2 flex'>
                            <span className='bg-verde w-4 h-4 rounded-full'></span>
                            <span className='bg-amarelo w-4 h-4 rounded-full'></span>
                            <span className='bg-rosa w-4 h-4 rounded-full'></span>
                        </div>

                        <div className='flex justify-center items-center pt-10'>
                            <div className='max-w-[290px] sm:max-w-[290px] md:max-w-[290px] lg:max-w-[290px] xl:max-w-[290px] transition-all duration-500 ease'>
                                <img className='rounded-3xl shadow-sm shadow-cinza-claro w-full h-auto' src={imgEu} alt="Niedja Marques" />
                            </div>
                        </div>

                    </div>                  

                </div>
                               
            </section>
        </>       
    )
}
export default About