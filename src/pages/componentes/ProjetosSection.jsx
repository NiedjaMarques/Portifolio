// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import img1 from '../../../app/view/imagens/ProjetoWebSite.png';
// import img2 from '../../../app/view/imagens/portifolioimg.jpg'
import img3 from '../../../app/view/imagens/ProjetoSistemadeLogin.png';
import img4 from '../../../app/view/imagens/ProjetoHamburgueria.png'
import img5 from '../../../app/view/imagens/ProjetoLoginFront.png'
// import { FaGithub, FaCloudArrowUp } from "react-icons/fa6";

// const Projetos = () => {

//     const [selectedProject, setSelectedProject] = useState('Web Site');

//     const projects = {
//         'Web Site': {
//             image: img1,
//             description: (
//                 <>
//                     <p>
//                         Desenvolvi uma réplica de um site existente utilizando <span className='text-azul-claro font-bold'>HTML5</span>, <span className='text-azul-claro font-bold'>Tailwind CSS</span>, <span className='text-azul-claro font-bold'>JavaScript</span> e <span className='text-azul-claro font-bold'>React JS</span>. Este projeto foca na recriação detalhada do design e das funcionalidades do site original, permitindo uma experiência de usuário consistente e interativa. A implementação inclui práticas avançadas de design responsivo e componentização com React, além de melhorias de performance para garantir uma navegação fluida e eficiente.
//                     </p>
//                     <p className='flex space-x-5 my-3'>
//                         <a href="https://github.com/NiedjaMarques/web-site" target="_blank">
//                             <FaGithub className='text-2xl text-azul-claro transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         </a>
//                         <a href="https://web-site-gfta.vercel.app/" target="_blank">
//                             <FaCloudArrowUp className='text-2xl text-azul-claro transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         </a>                    
//                     </p>
//                 </>                
//             ),
//         },

//         'Portifólio': {
//             image: img2,
//             description: (
//                 <>
//                     <p>
//                         Desenvolvi um portfólio com o objetivo de apresentar meus trabalhos e habilidades para visitantes interessados em conhecer mais sobre mim como desenvolvedora. Utilizei <span className='text-verde font-bold'>Tailwind CSS</span>, <span className='text-verde font-bold'>React JS</span> e <span className='text-verde font-bold'>HTML</span>, aplicando métodos de <span className='text-verde font-bold'>POO</span> e o padrão <span className='text-verde font-bold'>MVC</span>. Além disso, integrei o <span className='text-verde font-bold'>Email.js</span> para permitir o envio de emails diretamente para minha conta do Google. Este projeto serve como um currículo digital, destacando minha experiência e competências técnicas de forma clara e organizada.
//                     </p>
//                     <p className='flex space-x-5 my-3'>
//                         <a href="https://github.com/NiedjaMarques/Portifolio" target="_blank">
//                             <FaGithub className='text-2xl text-verde transition-all duration-500 ease hover:text-white cursor-pointer' />
//                         </a>
//                         <a href="https://portifolio-tau-orpin.vercel.app/" target="_blank">
//                             <FaCloudArrowUp className='text-2xl text-verde transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         </a>                    
//                     </p>
//                 </>
//             ),
//         },

//         'Sistema de Login': {
//             image: img3,
//             description: (
//                 <>
//                     <p>
//                         Desenvolvi um Sistema de Login utilizando <span className='text-rosa font-bold'>PHP</span>, <span className='text-rosa font-bold'>HTML</span>, <span className='text-rosa font-bold'>Tailwind CSS</span> e <span className='text-rosa font-bold'>MySQL</span>. Implementei funcionalidades de autenticação com gestão de sessões, criptografia de senhas no banco de dados e páginas de erro personalizadas para segurança adicional, garantindo uma experiência de usuário segura e eficiente. Também utilizei minhas habilidades em <span className='text-rosa font-bold'>MVC</span> e <span className='text-rosa font-bold'>POO</span>.  
//                     </p>
//                     <p className='flex space-x-5 my-3'>
//                         <a href="https://github.com/NiedjaMarques/Sistema-de-Autentica--o" target="_blank">
//                             <FaGithub className='text-2xl text-rosa transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         </a>                  
//                     </p>               
//                 </>   
//             ),
//         },

//         'Cardápio Hamburgueria': {
//             image: img4,
//             description: (
//                 <>
//                     <p>
//                         Desenvolvi um cardápio interativo utilizando <span className='text-amarelo font-bold'>Tailwind CSS</span>, <span className='text-amarelo font-bold'>HTML</span>, <span className='text-amarelo font-bold'>JavaScript</span> e <span className='text-amarelo font-bold'>Node.js</span>. Este projeto permite aos clientes visualizar os itens disponíveis, preços e descrições. Além disso, implementei funcionalidades que direcionam os clientes ao WhatsApp para finalizar seus pedidos, proporcionando uma experiência de compra simplificada e direta.
//                     </p>
//                     <p className='flex space-x-5 my-3'>
//                         <a href="https://github.com/NiedjaMarques/Projeto_Hamburgueria" target="_blank">
//                             <FaGithub className='text-2xl text-amarelo transition-all duration-500 ease hover:text-white cursor-pointer' />
//                         </a>
//                         <a href="https://projeto-hamburgueria-alpha.vercel.app/" target="_blank">
//                             <FaCloudArrowUp className='text-2xl text-amarelo transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         </a>                    
//                     </p>  
//                 </>
//             ),
//         },

//         'Login': {
//             image: img5,
//             description: (
//                 <>
//                     <p>
//                         Um dos meus primeiros projetos foi a criação de uma página de login utilizando apenas <span className='text-azul-claro font-bold'>HTML</span> e <span className='text-azul-claro font-bold'>CSS</span>, com foco em design responsivo. Esse projeto me ajudou a aprender os fundamentos do desenvolvimento web e a criar interfaces acessíveis, garantindo uma experiência consistente em desktops, tablets e smartphones.
//                     </p>
//                     <p className='flex space-x-5 my-3'>
//                         <a href="https://github.com/NiedjaMarques/projeto-login" target="_blank">
//                             <FaGithub className='text-2xl text-azul-claro transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         </a>
//                         <a href="https://projeto-login-pearl.vercel.app/" target="_blank">
//                             <FaCloudArrowUp className='text-2xl text-azul-claro transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         </a>                    
//                     </p>
//                 </>
//             ),
//         }

//     };

//     const handleClick = (projectName) => {
//         setSelectedProject(projectName);
//     };

//     return (
//         <>            
//             <section className="pb-10 my-5 transition-all duration-500 ease" id='projects'>

//                 <div className='py-4 transition-all duration-500 ease bg-green100'>

//                     <h2 className="flex items-center gap-2 text-xl text-verde font-bold mb-4">
//                     <span className="w-7 h-[1px] bg-verde"></span>
//                         Projetos
//                     </h2>
                    
//                 </div>                

//                 <div className='flex flex-col sm:flex-row items-center justify-between b-green-100'>

//                     <div className="w-full sm:w-1/3">

//                         {/* Lista para telas menores */}
//                         <div className='block sm:hidden font-bold cursor-grab'>
                    
//                             <Swiper
//                                 loop={true}
//                                 spaceBetween={10}
//                                 slidesPerView={1}
//                                 pagination={{ clickable: true }}
//                             >
                    
//                                 <SwiperSlide>
//                                    <li
//                                        onClick={() => handleClick('Web Site')}
//                                        className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Web Site' ? 'bg-azul-transparente text-white border-azul-claro' : 'text-slate-500 border-slate-500'}`}
//                                    >
//                                        Web Site <span className={`rounded-md  p-1 text-[10px] ${selectedProject === 'Web Site' ? 'inline bg-azul-claro text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                                    </li>
//                                 </SwiperSlide>
                    
//                                 <SwiperSlide>
//                                     <li
//                                        onClick={() => handleClick('Portifólio')}
//                                        className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Portifólio' ? 'bg-verde-transparente text-white border-verde' : 'text-slate-500 border-slate-500'}`}>
//                                        Portifólio <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Portifólio' ? 'inline bg-verde text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                                     </li>
//                                 </SwiperSlide>
                    
//                                 <SwiperSlide>
//                                    <li
//                                        onClick={() => handleClick('Sistema de Login')}
//                                        className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Sistema de Login' ? 'bg-rosa-transparente text-white border-rosa' : 'text-slate-500 border-slate-500'}`}
//                                    >
//                                        Sistema de Login <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Sistema de Login' ? 'inline bg-rosa text-azul-escuro' : 'hidden'}`}>Fullstack</span>
//                                    </li>
//                                 </SwiperSlide>

//                                 <SwiperSlide>
//                                    <li
//                                        onClick={() => handleClick('Cardápio Hamburgueria')}
//                                        className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Cardápio Hamburgueria' ? 'bg-amarelo-transparente text-white border-amarelo' : 'text-slate-500 border-slate-500'}`}
//                                    >
//                                        Cardápio Hamburgueria <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Cardápio Hamburgueria' ? 'inline bg-amarelo text-azul-escuro' : 'hidden'}`}>Fullstack</span>
//                                    </li>
//                                 </SwiperSlide>

//                                 <SwiperSlide>
//                                    <li
//                                        onClick={() => handleClick('Login')}
//                                        className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Login' ? 'bg-azul-transparente text-white border-azul-claro' : 'text-slate-500 border-slate-500'}`}
//                                    >
//                                        Login <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Login' ? 'inline bg-azul-claro text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                                    </li>
//                                 </SwiperSlide>

//                             </Swiper>

//                         </div>

//                         {/* Lista para telas maiores */}
//                         <ul className="hidden sm:block font-bold cursor-pointer">

//                             <li
//                                 onClick={() => handleClick('Web Site')}
//                                 className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Web Site' ? 'bg-azul-transparente text-white border-azul-claro' : 'text-slate-500 border-slate-500'}`}
//                             >
//                                 Web Site <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Web Site' ? 'inline bg-azul-claro text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                             </li>

//                             <li
//                                 onClick={() => handleClick('Portifólio')}
//                                 className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Portifólio' ? 'bg-verde-transparente text-white border-verde' : 'text-slate-500 border-slate-500'}`}
//                             >
//                                 Portifólio <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Portifólio' ? 'inline bg-verde text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                             </li>

//                             <li
//                                 onClick={() => handleClick('Sistema de Login')}
//                                 className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Sistema de Login' ? 'bg-rosa-transparente text-white border-rosa ' : 'text-slate-500 border-slate-500'}`}
//                             >
//                                 Sistema de Login <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Sistema de Login' ? 'inline bg-rosa text-azul-escuro' : 'hidden'}`}>Fullstack</span>
//                             </li>

//                             <li
//                                 onClick={() => handleClick('Cardápio Hamburgueria')}
//                                 className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Cardápio Hamburgueria' ? 'bg-amarelo-transparente text-white border-amarelo' : 'text-slate-500 border-slate-500'}`}
//                             >
//                                 Cardápio Hamburgueria <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Cardápio Hamburgueria' ? 'inline bg-amarelo text-azul-escuro' : 'hidden'}`}>Fullstack</span>
//                             </li>

//                             <li
//                                 onClick={() => handleClick('Login')}
//                                 className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Login' ? 'bg-azul-transparente text-white border-azul-claro' : 'text-slate-500 border-slate-500'}`}
//                             >
//                                 Login <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Login' ? 'inline bg-azul-claro text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                             </li>

//                         </ul>

//                     </div>

//                     <div className="bg-orange-80 sm:w-2/3 p-4 my-2">
                    
//                         <img src={projects[selectedProject].image} alt="..." className='rounded-lg border sm:max-w-[55%] float-left mr-4 my-4 sm:my-0'/>
//                         <div className='text-justify'>
//                             {projects[selectedProject].description}
//                         </div>
//                     </div>

//                 </div>

//             </section>
//         </>
//     )
// }
// export default Projetos;



import React from 'react';
import img1 from '../../../app/view/imagens/ProjetoWebSite.png';
import img2 from '../../../app/view/imagens/portifolioimg.jpg';


const projects = [
    {
        title: 'Web Site',
        image: img1,
        technologies: 'HTML5 · Tailwind CSS · JavaScript · React JS',
        description: 'O projeto foi um desafio prático para desenvolver minhas habilidades em front-end, desde a estruturação da interface até a implementação de animações, formulários e layout responsivo. O desenvolvimento envolveu a construção de uma página inicial com foco na fidelidade visual, organização dos componentes e adaptação a diferentes tamanhos de tela.',
        github: 'https://github.com/NiedjaMarques/web-site',
        demo: 'https://web-site-gfta.vercel.app/',
    },
    {
        title: 'Portifólio',
        image: img2,
        technologies: 'React.js · JavaScript · HTML5 · Tailwind CSS · EmailJS · POO · MVC',
        description: 'Desenvolvi este portfólio como uma aplicação web para apresentar minha trajetória, projetos e habilidades em tecnologia. O projeto inclui uma interface responsiva, organização de componentes e integração com EmailJS, permitindo o envio de mensagens diretamente pelo formulário de contato.',
        github: 'https://github.com/NiedjaMarques/Portifolio',
        demo: 'https://portifolio-tau-orpin.vercel.app/',
    },
    {
        title: 'Sistema de Autenticação de Usuários',
        image: img3,
        technologies: 'PHP · MySQL · HTML5 · Tailwind CSS · POO · MVC',
        description: 'Desenvolvi um sistema de login com autenticação de usuários, gerenciamento de sessões e armazenamento de senhas utilizando hashing. O projeto também inclui páginas de erro personalizadas e aplicação dos conceitos de Programação Orientada a Objetos (POO) e padrão MVC, com foco na organização e segurança da aplicação.',
        github: 'https://github.com/NiedjaMarques/Sistema-de-Autentica--o',
        demo: '',
    },
    {
        title: 'Cardápio Digital Interativo',
        image: img4,
        technologies: 'HTML5 · Tailwind CSS · JavaScript · Node.js',
        description: 'Desenvolvi um cardápio digital interativo que permite aos clientes visualizar produtos, preços e descrições, além de realizar pedidos diretamente pelo WhatsApp. O projeto foi desenvolvido com foco na experiência do usuário, praticidade e simplificação do processo de pedidos.',
        github: 'https://github.com/NiedjaMarques/Projeto_Hamburgueria',
        demo: 'https://projeto-hamburgueria-alpha.vercel.app/',
    },
];

const Projetos = () => {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-4 py-10">

            <h2 className="flex items-center gap-2 text-xl text-verde font-bold mb-8">
                <span className="w-7 h-[1px] bg-verde"></span>
                Projetos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                {projects.map((project, index) => (
                    <article
                        key={index}
                        className="group rounded-xl overflow-hidden border border-cinza-medio bg-preto transition-all duration-300 hover:border-verde"
                    >

                        {/* Imagem e tecnologias */}
                        <div className="relative overflow-hidden aspect-video bg-cinza-medio">

                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-contain transition-transform duration-500"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-cinza-claro">
                                    Imagem do projeto
                                </div>
                            )}

                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                                <p className="text-center text-white text-sm font-medium">
                                    {project.technologies}
                                </p>
                            </div>

                        </div>

                        {/* Conteúdo */}
                        <div className="p-5">

                            <h3 className="text-lg font-bold text-verde mb-3">
                                {project.title}
                            </h3>

                            <p className="text-sm text-cinza-claro leading-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                {project.description}
                            </p>

                            {/* Links */}
                            <div className="flex gap-5 mt-5">

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-verde hover:text-white transition"
                                    >
                                        GitHub →
                                    </a>
                                )}

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-verde hover:text-white transition"
                                    >
                                        Visualizar projeto →
                                    </a>
                                )}

                            </div>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
};

export default Projetos;

