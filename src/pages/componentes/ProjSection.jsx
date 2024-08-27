// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';  // Importação do Pagination
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { FaGithub, FaCloudArrowUp } from "react-icons/fa6";
// import img1 from '../../../app/view/imagens/ProjetoWebSite.png';
// import img2 from '../../../app/view/imagens/portifolioimg.jpg'
// import img3 from '../../../app/view/imagens/ProjetoSistemadeLogin.png';
// import img4 from '../../../app/view/imagens/ProjetoHamburgueria.png'
// import img5 from '../../../app/view/imagens/ProjetoLoginFront.png'

// const ProjSection = () => {
//     const [selectedProject, setSelectedProject] = useState('Sistema de Login');

//     const projects = {
//         'Web Site': {
//             image: img1,
//             description: (
//                 <>
//                     <p>
//                         Desenvolvi uma réplica de um site existente utilizando <span className='text-azul-claro font-bold'>HTML5</span>, <span className='text-azul-claro font-bold'>Tailwind CSS</span>, <span className='text-azul-claro font-bold'>JavaScript</span> e <span className='text-azul-claro font-bold'>React JS</span>. Este projeto foca na recriação detalhada do design e das funcionalidades do site original, permitindo uma experiência de usuário consistente e interativa. A implementação inclui práticas avançadas de design responsivo e componentização com React, além de melhorias de performance para garantir uma navegação fluida e eficiente.
//                     </p>
//                     <p className='flex space-x-5 my-3'>
//                         <FaGithub className='text-2xl text-azul-claro transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         <FaCloudArrowUp className='text-2xl text-azul-claro transition-all duration-500 ease hover:text-white cursor-pointer'/>                    
//                     </p>
//                 </>
                
                
//                 ),
//         },
//         'Portifólio': {
//             image: img2,
//             description: (
//                 <>
//                     <p>
//                         Desenvolvi um portfólio com o objetivo de apresentar meus trabalhos e habilidades para visitantes interessados em conhecer mais sobre mim como desenvolvedora. Utilizei <span className='text-verde font-bold'>Tailwind CSS</span>, <span className='text-verde font-bold'>React JS</span> e <span className='text-verde font-bold'>HTML</span>, aplicando métodos de <span className='text-verde font-bold'>POO</span> e o padrão <span className='text-verde font-bold'>MVC</span>. Além disso, integrei o <span className='text-verde font-bold'>Email.js</span> para permitir o envio de emails diretamente para minha conta do Google. Este projeto serve como um currículo digital, destacando minha experiência e competências técnicas de forma clara e organizada.
//                     </p>
//                     <p className='flex space-x-5 my-3'>
//                         <FaGithub className='text-2xl text-verde transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         <FaCloudArrowUp className='text-2xl text-verde transition-all duration-500 ease hover:text-white cursor-pointer'/>                    
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
//                         <FaGithub className='text-2xl text-rosa transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         <FaCloudArrowUp className='text-2xl text-rosa transition-all duration-500 ease hover:text-white cursor-pointer'/>                    
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
//                         <FaGithub className='text-2xl text-amarelo transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         <FaCloudArrowUp className='text-2xl text-amarelo transition-all duration-500 ease hover:text-white cursor-pointer'/>                    
//                     </p>  
//                 </>),
//         },
//         'Login': {
//             image: img5,
//             description: (
//                 <>
//                     <p>
//                         Um dos meus primeiros projetos foi a criação de uma página de login utilizando apenas <span className='text-azul-claro font-bold'>HTML</span> e <span className='text-azul-claro font-bold'>CSS</span>, com foco em design responsivo. Esse projeto me ajudou a aprender os fundamentos do desenvolvimento web e a criar interfaces acessíveis, garantindo uma experiência consistente em desktops, tablets e smartphones.
//                     </p>
//                     <p className='flex space-x-5 my-3'>
//                         <FaGithub className='text-2xl text-azul-claro transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         <FaCloudArrowUp className='text-2xl text-azul-claro transition-all duration-500 ease hover:text-white cursor-pointer'/>                    
//                     </p>
//                 </>),
//         }
//     };

//     const handleClick = (projectName) => {
//         setSelectedProject(projectName);
//     };

//     return (
//         <>
//             <section className="my-10 flex flex-col sm:flex-row items-center justify-between">

//                 <div className="w-full sm:w-1/3">

//                     {/* Lista para telas menores */}
//                     <div className='block sm:hidden font-bold cursor-grab'>
                    
//                         <Swiper 
//                             loop={true}
//                             spaceBetween={10}
//                             slidesPerView={2}
//                             pagination={{ clickable: true }}

//                         >
                       
//                             <SwiperSlide>
//                                <li
//                                    onClick={() => handleClick('Web Site')}
//                                    className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Web Site' ? 'bg-azul-transparente text-white border-azul-claro' : 'text-slate-500 border-slate-500'}`}
//                                >
//                                    Web Site <span className={`rounded-md  p-1 text-[10px] ${selectedProject === 'Web Site' ? 'inline bg-azul-claro text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                                </li>
//                             </SwiperSlide>

                           
//                             <SwiperSlide>
//                                 <li
//                                    onClick={() => handleClick('Portifólio')}
//                                    className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Portifólio' ? 'bg-verde-transparente text-white border-verde' : 'text-slate-500 border-slate-500'}`}>
//                                    Portifólio <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Portifólio' ? 'inline bg-verde text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                                 </li>
//                             </SwiperSlide>
                           
//                             <SwiperSlide>
//                                <li
//                                    onClick={() => handleClick('Sistema de Login')}
//                                    className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Sistema de Login' ? 'bg-rosa-transparente text-white border-rosa' : 'text-slate-500 border-slate-500'}`}
//                                >
//                                    Sistema de Login <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Sistema de Login' ? 'inline bg-rosa text-azul-escuro' : 'hidden'}`}>Fullstack</span>
//                                </li>
//                             </SwiperSlide>

//                             <SwiperSlide>
//                                <li
//                                    onClick={() => handleClick('Cardápio Hamburgueria')}
//                                    className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Cardápio Hamburgueria' ? 'bg-amarelo-transparente text-white border-amarelo' : 'text-slate-500 border-slate-500'}`}
//                                >
//                                    Cardápio Hamburgueria <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Cardápio Hamburgueria' ? 'inline bg-amarelo text-azul-escuro' : 'hidden'}`}>Fullstack</span>
//                                </li>
//                             </SwiperSlide>

//                             <SwiperSlide>
//                                <li
//                                    onClick={() => handleClick('Login')}
//                                    className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Login' ? 'bg-azul-transparente text-white border-azul-claro' : 'text-slate-500 border-slate-500'}`}
//                                >
//                                    Login <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Login' ? 'inline bg-azul-claro text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                                </li>
//                             </SwiperSlide>
  
//                         </Swiper>

//                     </div>

//                     {/* Lista para telas maiores */}
//                     <ul className="hidden sm:block font-bold cursor-pointer">

//                         <li
//                             onClick={() => handleClick('Web Site')}
//                             className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Web Site' ? 'bg-azul-transparente text-white border-azul-claro' : 'text-slate-500 border-slate-500'}`}
//                         >
//                             Web Site <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Web Site' ? 'inline bg-azul-claro text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                         </li>

//                         <li
//                             onClick={() => handleClick('Portifólio')}
//                             className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Portifólio' ? 'bg-verde-transparente text-white border-verde' : 'text-slate-500 border-slate-500'}`}
//                         >
//                             Portifólio <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Portifólio' ? 'inline bg-verde text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                         </li>

//                         <li
//                             onClick={() => handleClick('Sistema de Login')}
//                             className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Sistema de Login' ? 'bg-rosa-transparente text-white border-rosa ' : 'text-slate-500 border-slate-500'}`}
//                         >
//                             Sistema de Login <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Sistema de Login' ? 'inline bg-rosa text-azul-escuro' : 'hidden'}`}>Fullstack</span>
//                         </li>

//                         <li
//                             onClick={() => handleClick('Cardápio Hamburgueria')}
//                             className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Cardápio Hamburgueria' ? 'bg-amarelo-transparente text-white border-amarelo' : 'text-slate-500 border-slate-500'}`}
//                         >
//                             Cardápio Hamburgueria <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Cardápio Hamburgueria' ? 'inline bg-amarelo text-azul-escuro' : 'hidden'}`}>Fullstack</span>
//                         </li>

//                         <li
//                             onClick={() => handleClick('Login')}
//                             className={`py-4 px-2 text-lg border-l-4 ${selectedProject === 'Login' ? 'bg-azul-transparente text-white border-azul-claro' : 'text-slate-500 border-slate-500'}`}
//                         >
//                             Login <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === 'Login' ? 'inline bg-azul-claro text-azul-escuro' : 'hidden'}`}>Front-end</span>
//                         </li>

//                     </ul>

//                 </div>               

//                 <div className="bg-orange-80 sm:w-2/3 p-4 my-2">
                    
//                     <img src={projects[selectedProject].image} alt="..." className='rounded-lg border sm:max-w-[55%] float-left mr-4 my-4 sm:my-0'/>

//                     <div className='text-justify'>
//                         {projects[selectedProject].description}
//                     </div>                                 

//                 </div>

//             </section>
//         </>
//     );
// }
// export default ProjSection;




















































// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';  // Importação do Pagination
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { FaGithub, FaCloudArrowUp } from "react-icons/fa6";
// import img2 from '../../../app/view/imagens/ProjetoSistemadeLogin.png';
// import img3 from '../../../app/view/imagens/ProjetoLoginFront.png'
// import img4 from '../../../app/view/imagens/ProjetoHamburgueria.png'
// import img5 from '../../../app/view/imagens/portifolioimg.jpg'

// const ProjSection = () => {
//     const [selectedProject, setSelectedProject] = useState('Sistema de Login');

//     const projects = {
//         'Web Site': {
//             image: img2,  // Imagem do ultimo projeto img1
//             description: (
//                 <p>
//                     Desenvolvi um Sistema de Login utilizando <span className='text-azul-claro font-bold'>PHP</span>, <span className='text-azul-claro font-bold'>HTML</span>, <span className='text-azul-claro font-bold'>Tailwind CSS</span> e <span className='text-azul-claro font-bold'>MySQL</span>. Implementei funcionalidades de autenticação com gestão de sessões, criptografia de senhas no banco de dados e páginas de erro personalizadas para segurança adicional, garantindo uma experiência de usuário segura e eficiente. Também utilizei minhas habilidades em <span className='text-azul-claro font-bold'>MVC</span> e <span className='text-azul-claro font-bold'>POO</span>.
//                 </p>
//             ),
//         },
//         'Portifólio': {
//             image: img5,  // Substitua com a imagem correta
//             description: (
//                 <p>
//                     Desenvolvi um portfólio com o objetivo de apresentar meus trabalhos e habilidades para visitantes interessados em conhecer mais sobre mim como desenvolvedora. Utilizei <span className='text-azul-claro font-bold'>Tailwind CSS</span>, <span className='text-azul-claro font-bold'>React JS</span> e <span className='text-azul-claro font-bold'>HTML</span>, aplicando métodos de <span className='text-azul-claro font-bold'>POO</span> e o padrão <span className='text-azul-claro font-bold'>MVC</span>. Além disso, integrei o <span className='text-azul-claro font-bold'>Email.js</span> para permitir o envio de emails diretamente para minha conta do Google. Este projeto serve como um currículo digital, destacando minha experiência e competências técnicas de forma clara e organizada.
//                 </p>
//             ),
//         },
//         'Sistema de Login': {
//             image: img2,
//             description: (
//                 <p>
//                     Desenvolvi um Sistema de Login utilizando <span className='text-azul-claro font-bold'>PHP</span>, <span className='text-azul-claro font-bold'>HTML</span>, <span className='text-azul-claro font-bold'>Tailwind CSS</span> e <span className='text-azul-claro font-bold'>MySQL</span>. Implementei funcionalidades de autenticação com gestão de sessões, criptografia de senhas no banco de dados e páginas de erro personalizadas para segurança adicional, garantindo uma experiência de usuário segura e eficiente. Também utilizei minhas habilidades em <span className='text-azul-claro font-bold'>MVC</span> e <span className='text-azul-claro font-bold'>POO</span>.
//                 </p>
//             ),
//         },
//         'Cardápio Hamburgueria': {
//             image: img4,  // Substitua com a imagem correta
//             description: (
//                 <p>
//                     Desenvolvi um cardápio interativo utilizando <span className='text-azul-claro font-bold'>Tailwind CSS</span>, <span className='text-azul-claro font-bold'>HTML</span>, <span className='text-azul-claro font-bold'>JavaScript</span> e <span className='text-azul-claro font-bold'>Node.js</span>. Este projeto permite aos clientes visualizar os itens disponíveis, preços e descrições. Além disso, implementei funcionalidades que direcionam os clientes ao WhatsApp para finalizar seus pedidos, proporcionando uma experiência de compra simplificada e direta.
//                 </p>
//             ),
//         },
//         'Login': {
//             image: img3,  // Substitua com a imagem correta
//             description: (
//                 <p>
//                     Um dos meus primeiros projetos foi a criação de uma página de login utilizando apenas <span className='text-azul-claro font-bold'>HTML</span> e <span className='text-azul-claro font-bold'>CSS</span>, com foco em design responsivo. Esse projeto me ajudou a aprender os fundamentos do desenvolvimento web e a criar interfaces acessíveis, garantindo uma experiência consistente em desktops, tablets e smartphones.
//                 </p>
//             ),
//         }
//     };

//     const handleClick = (projectName) => {
//         setSelectedProject(projectName);
//     };

//     return (
//         <>
//             <section className="my-10 flex flex-col sm:flex-row items-center justify-between">

//                 <div className="w-full sm:w-1/3">
                    
//                     <Swiper
//                         spaceBetween={10}
//                         slidesPerView={1}
//                         pagination={{ clickable: true }}
//                         className="block sm:hidden"
//                     >
//                         {Object.keys(projects).map((projectName) => (
//                             <SwiperSlide key={projectName}>
//                                 <li
//                                     onClick={() => handleClick(projectName)}
//                                     className={`py-4 px-2 text-lg border-l-4 ${
//                                         selectedProject === projectName ? 'text-slate-500 border-slate-500' : 'text-slate-500 border-slate-500'
//                                     }`}
//                                 >
//                                     {projectName} <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === projectName ? 'inline' : 'hidden'}`}>Front-end</span>
//                                 </li>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* Lista de projetos para telas maiores */}
//                     <ul className='font-bold cursor-pointer mr-2 hidden sm:block'>
//                         {Object.keys(projects).map((projectName) => (
//                             <li
//                                 key={projectName}
//                                 onClick={() => handleClick(projectName)}
//                                 className={`py-4 px-2 text-lg border-l-4 ${
//                                     selectedProject === projectName ? `bg-${projectName.toLowerCase()}-transparente text-white border-${projectName.toLowerCase()}` : 'text-slate-500 border-slate-500'
//                                 }`}
//                             >
//                                 {projectName} <span className={`rounded-md text-white p-1 text-[10px] ${selectedProject === projectName ? 'inline' : 'hidden'}`}>Front-end</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="bg-orange-80 w-2/3 p-4">
//                     <div className=''>
//                         <img src={projects[selectedProject].image} alt="..." className=' border rounded-lg sm:max-w-[55%] float-left mr-4'/>
//                         <p className='text-justify'>
//                             {projects[selectedProject].description}
//                         </p>
//                     </div>                

//                     <p className='flex space-x-5 my-3'>
//                         <FaGithub className='text-2xl text-azul-claro transition-all duration-500 ease hover:text-white cursor-pointer'/>
//                         <FaCloudArrowUp className='text-2xl text-azul-claro transition-all duration-500 ease hover:text-white cursor-pointer'/>                    
//                     </p>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default ProjSection;




