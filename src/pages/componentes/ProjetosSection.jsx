import React from 'react';
import img2 from '../../../app/view/imagens/ProjetoSistemadeLogin.png'
import img3 from '../../../app/view/imagens/ProjetoLoginFront.png'
import img4 from '../../../app/view/imagens/ProjetoHamburgueria.png'
import img5 from '../../../app/view/imagens/portifolioimg.jpg'

const Projetos = () => {
    return (
        <>
            <section className="pb-10 my-5 transition-all duration-500 ease" id='projects'>

                <div className='py-4 transition-all duration-500 ease'>
                    <h1 className="font-bold text-3xl sm:text-4xl mb-5 transition-all duration-500 ease">
                        <span className='text-azul-claro'>03.</span>Projetos
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-12 ">                   

                    <div className='transition-all duration-300 ease-in flex flex-col sm:flex-row items-center'>

                        <div className='sm:max-w-[40%] mr-5 '>
                            <img className="w-full mb-4 transition-all duration-500 ease rounded-lg" src={img2} alt="Projeto Sistema de Login" />
                        </div>

                        <div className='sm:max-w-[50%]'>

                            <a href="https://github.com/NiedjaMarques/Sistema-de-Autentica--o" target="_blank" className="transition-all duration-500 ease hover:underline mb-4 text-azul-claro font-bold cursor-pointer text-lg">
                            &lt;a&gt;Sistema de Login&lt;/a&gt;
                            </a>

                            <p className='pt-4'>
                                Desenvolvi um Sistema de Login utilizando <span className='text-azul-claro font-bold'>PHP</span>, <span className='text-azul-claro font-bold'>HTML</span>, <span className='text-azul-claro font-bold'>Tailwind CSS</span> e <span className='text-azul-claro font-bold'>MySQL</span>. Implementei funcionalidades de autenticação com gestão de sessões, criptografia de senhas no banco de dados e páginas de erro personalizadas para segurança adicional, garantindo uma experiência de usuário segura e eficiente. Também utilizei minhas habilidades em <span className='text-azul-claro font-bold'>MVC</span> e <span className='text-azul-claro font-bold'>POO</span>.
                            </p>

                        </div>                       

                    </div>

                    <div className='transition-all duration-300 ease-in flex flex-col sm:flex-row-reverse items-center'>

                        <div className='sm:max-w-[50%] ml-5 border rounded-lg p-4'>
                            <img className="w-full mb-4 transition-all duration-500 ease rounded-lg" src={img5} alt="Projeto Portifólio" />
                        </div>

                        <div className='sm:max-w-[50%] '>

                            <a href="https://github.com/NiedjaMarques/Projeto_Hamburgueria" target="_blank" className="transition-all duration-500 ease hover:underline mb-4 text-azul-claro font-bold cursor-pointer text-lg ">
                            &lt;a&gt;Meu Portifólio&lt;/a&gt;
                            </a>

                            <p className="pt-4">
                                Desenvolvi um portfólio com o objetivo de apresentar meus trabalhos e habilidades para visitantes interessados em conhecer mais sobre mim como desenvolvedora. Utilizei tecnologias modernas como <span className='text-azul-claro font-bold'>Tailwind CSS</span>, <span className='text-azul-claro font-bold'>React JS</span>, <span className='text-azul-claro font-bold'>HTML</span> e <span className='text-azul-claro font-bold'>Node.js</span>, aplicando métodos de <span className='text-azul-claro font-bold'>POO</span> e o padrão <span className='text-azul-claro font-bold'>MVC</span>. Este projeto serve como um currículo digital, destacando minha experiência e competências técnicas de forma clara e organizada.
                            </p>

                        </div>

                    </div>

                    <div className='transition-all duration-300 ease-in flex flex-col sm:flex-row items-center'>

                        <div className='sm:max-w-[40%] mr-5'>
                            <img className="w-full mb-4 transition-all duration-500 ease rounded-lg" src={img4} alt="Projeto Humburgueria" />
                        </div>

                        <div className='sm:max-w-[50%]'>

                            <a href="https://github.com/NiedjaMarques/Projeto_Hamburgueria" target="_blank" className="transition-all duration-500 ease hover:underline mb-4 text-azul-claro font-bold cursor-pointer text-lg">
                            &lt;a&gt;Cardápio Hamburgueria&lt;/a&gt;
                            </a>

                            <p className="pt-4">
                                Desenvolvi um cardápio interativo utilizando <span className='text-azul-claro font-bold'>Tailwind CSS</span>, <span className='text-azul-claro font-bold'>HTML</span>, <span className='text-azul-claro font-bold'>JavaScript</span> e <span className='text-azul-claro font-bold'>Node.js</span>. Este projeto permite aos clientes visualizar os itens disponíveis, preços e descrições. Além disso, implementei funcionalidades que direcionam os clientes ao WhatsApp para finalizar seus pedidos, proporcionando uma experiência de compra simplificada e direta.
                            </p>

                        </div>

                    </div> 

                    <div className=' transition-all duration-300 ease-in flex flex-col sm:flex-row-reverse items-center'>

                        <div className='sm:max-w-[40%] ml-5'>
                            <img className="w-full mb-4 transition-all duration-500 ease rounded-lg" src={img3} alt="Pagina de login responsiva" />
                        </div>                       

                        <div className='sm:max-w-[50%]'>
                            <a href="https://github.com/NiedjaMarques/projeto-login" target="_blank" className="transition-all duration-500 ease hover:underline mb-4 text-azul-claro font-bold cursor-pointer text-lg">
                            &lt;a&gt;Página de Login Responsiva&lt;/a&gt;
                            </a>
                            <p className="pt-4">
                                Um dos meus primeiros projetos foi a criação de uma página de login utilizando apenas <span className='text-azul-claro font-bold'>HTML</span> e <span className='text-azul-claro font-bold'>CSS</span>, com foco em design responsivo. Esse projeto me ajudou a aprender os fundamentos do desenvolvimento web e a criar interfaces acessíveis, garantindo uma experiência consistente em desktops, tablets e smartphones.
                            </p>
                        </div>

                    </div> 

                </div>

            </section>
        </>
    )
}

export default Projetos;