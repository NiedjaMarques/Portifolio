import React from 'react';
import imgEu from '../../../app/view/imagens/cabelolongoproxxima.jpg'

function About(){
    return(
        <>
            <section className="py-4 grid sm:grid-cols-2 gap-4 items-center transition-all duration-500 ease " id='about'>

                <div className="pb-4 sm:pb-0 transition-all duration-500 ease">

                    <h1 className="font-bold text-3xl sm:text-4xl mb-5 transition-all duration-500 ease">
                        <span className='text-amarelo'>02.</span>Sobre mim
                    </h1>

                    <p>
                        Meu nome é Niedja Marques, e minha jornada na programação começou pelo desejo de compreender como as coisas funcionam. Dediquei-me à criação de projetos variados, enriquecendo minhas habilidades em desenvolvimento web.
                    </p>

                    <p className='my-4'>
                        Busco constantemente me aprimorar tanto em <span className='text-verde font-bold'>front-end</span>, com experiência em <span className='text-amarelo font-bold'>HTML</span>, <span className='text-amarelo font-bold'>CSS</span>, <span className='text-amarelo font-bold'>JavaScript</span>, <span className='text-amarelo font-bold'>React JS</span> e <span className='text-amarelo font-bold'>Tailwind CSS</span>, quanto em <span className='text-verde font-bold'>back-end</span>, com conhecimentos em <span className='text-amarelo font-bold'>Node.js</span>, <span className='text-amarelo font-bold'>PHP</span> e gestão de bancos de dados <span className='text-amarelo font-bold'>MySQL</span>. Além disso, estou familiarizada com os princípios de <span className='text-amarelo font-bold'>POO (Programação Orientada a Objetos)</span> e <span className='text-amarelo font-bold'>MVC (Model-View-Controller)</span>.
                    </p>
                                            
                </div>                    

                <div className='p-5 rounded-xl border relative transition-all duration-500 ease '>

                    <div className='border-b w-full space-x-2 absolute top-2 left-0 px-4 py-2 flex'>
                        <span className='bg-verde w-4 h-4 rounded-full'></span>
                        <span className='bg-amarelo w-4 h-4 rounded-full'></span>
                        <span className='bg-rosa w-4 h-4 rounded-full'></span>
                    </div>

                    <div className='flex justify-center items-center pt-10 '>
                        <div className='max-w-[290px]  sm:max-w-[290px] md:max-w-[290px] lg:max-w-[290px] xl:max-w-[290px] transition-all duration-500 ease'>
                            <img className='rounded-3xl w-full max-h-[320px] ' src={imgEu} alt="Niedja Marques" />
                        </div>
                    </div>

                </div>  

            </section>
        </>       
    )
}
export default About