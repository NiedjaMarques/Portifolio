import React from 'react';
import euMesma from '../../../app/view/imagens/eumesma.png'
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaGithub, FaNodeJs, FaCode } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiVitess, SiSupabase, SiMake, SiPostgresql, SiN8N } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Home = () => {
    return (
        <section id='home' className="pt-20 min-h-screen grid sm:grid-cols-2 gap-6 items-center max-w-6xl mx-auto px-4 transition-all duration-500 ease place-items-center">

            <div className='grid gap-6 transition-all duration-500 ease'>

                <p className='transition-all duration-500 ease'>
                    Olá👋 , eu sou  
                </p>

                <div>
                    <h1 className="font-bold text-3xl sm:text-5xl transition-all duration-500 ease">
                        Niedja <span className='text-verde'>Marques</span>
                    </h1>

                    <p className='transition-all duration-500 ease'>
                        Desenvolvedora Full Stack 
                    </p>
                </div>

                <p className='transition-all duration-500 ease'>
                    Sou programadora fullstack e supervisora de automação de processos, ajudando empresas a escalar operações com eficiência.
                </p>

                <div className='flex flex-wrap gap-4 transition-all duration-500 ease'>
                    <a href="#projects" className='bg-verde text-preto px-6 py-3 rounded-lg font-medium hover:opacity-90 transition'>
                    Veja meus projetos →
                    </a>

                    <a href="#contact" className='border border-cinza-medio px-6 py-3 rounded-lg hover:border-verde transition'>
                    Entre em contato ✉︎
                    </a>
                </div>

                <div className="flex flex-wrap gap-3 mt-4 text-2xl text-branco justify-center sm:justify-start items-center">

                    {/* Frontend */}
                    <i className="devicon-html5-plain"><FaHtml5/></i>
                    <i className="devicon-css3-plain"><FaCss3Alt/></i>
                    <i className="devicon-javascript-plain"><IoLogoJavascript/></i>
                    <i className="devicon-react-original"><FaReact/></i>
                    <i className="devicon-tailwindcss-plain"><SiTailwindcss/></i>

                    {/* Backend */}
                    <i className="devicon-nodejs-plain"><FaNodeJs/></i>
                    <i className="devicon-php-plain"><FaPhp/></i>

                    {/* Banco de dados */}
                    <i className="devicon-mysql-plain"><SiMysql/></i>
                    <i className="devicon-postgresql-plain"><SiPostgresql/></i>
                    <i className="devicon-supabase-plain"><SiSupabase/></i>

                    {/* Ferramentas / DevOps / Automação */}
                    <i className="devicon-github-original"><FaGithub/></i>
                    <i className="devicon-git-plain"><SiMake/></i>
                    <i className="devicon-git-plain"><SiN8N/></i>
                    <i className="devicon-git-plain"><SiVitess/></i>

                </div>

            </div>

            <div className='transition-all duration-500 ease'> 
                <img
                src={euMesma}
                alt="Niedja Marques"
                className='max-h-[80vh] rounded-2xl'
                />
            </div>
            
        </section>
    );
}
export default Home;

// NÃO PRECISA DE MAIS AJUSTES 05/05/2026