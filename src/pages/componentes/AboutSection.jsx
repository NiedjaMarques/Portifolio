import React from 'react';
import euMesma from '../../../app/view/imagens/notebook2.png'
import { FaCode } from "react-icons/fa";

function About(){
    return(

        <section  id='about' className="py-6 min-h-screen grid sm:grid-cols-2 gap-6 items-center max-w-6xl mx-auto px-4 transition-all duration-500 ease place-items-center"> 
            
            <div className="pb-4 sm:pb-0 transition-all duration-500 ease">

                <h2 className="flex items-center gap-2 text-xl text-verde font-bold mb-4">
                <span className="w-7 h-[1px] bg-verde"></span>
                    Sobre mim
                </h2>

                <div className="space-y-4 leading-6">

                    <p>
                        Me chamo Niedja Marques, estudante de Análise e Desenvolvimento de Sistemas pela Estácio e profissional com mais de 2 anos de experiência liderando operações de automação e atuando como programadora há 3 anos.
                    </p>

                    <p>
                        Atualmente atuo como supervisora, conduzindo processos que otimizam atendimentos e organizam fluxos, principalmente em clínicas e áreas comerciais.                    
                    </p>

                    <p>
                        Estudo programação desde 2022 e venho construindo minha base técnica enquanto aplico, na prática, soluções para problemas reais de negócio.                    
                    </p>

                    <p>
                        Gosto de transformar cenários desorganizados em processos claros, funcionais e orientados a resultado.
                    </p>

                </div>

                <div className='mt-6 inline-block border p-2 rounded-2xl border-cinza-medio'>
                    <a href="https://wa.me/5583993449215" target="_blank" className="flex items-center gap-2">
                        <span className='text-verde bg-verde/25 p-2 rounded-full'>
                        <FaCode/>
                        </span>
                        Vamos conversar? →
                    </a>
                </div>

                <p className="flex items-center gap-2 mt-4">
                    <span className="relative flex w-3 h-3">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-verde opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-3 h-3 rounded-full bg-verde"></span>
                    </span>
                    Disponível para novos projetos
                </p>

            </div>
                                        
            <div className='flex justify-center items-center '>
                <img className='max-h-[80vh] rounded-2xl' src={euMesma} alt="Niedja Marques" />
            </div>

        </section>
              
    )
}
export default About