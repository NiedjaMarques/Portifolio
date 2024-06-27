import React from 'react';
import img2 from '../../../app/view/imagens/ProjetoSistemadeLogin.png'
import img3 from '../../../app/view/imagens/ProjetoLoginFront.png'
import img4 from '../../../app/view/imagens/ProjetoHamburgueria.png'

const Projetos = () => {
    return (
        <>
            <section className="pb-12 container px-4 mx-auto" id='projects'>

                <div className="text-start transition-all duration-500 ease">

                    <h1 className="text-3xl sm:text-4xl font-bold transition-all duration-500 ease py-10 md:ml-6 lg:ml-28">
                        <span className='text-azul-claro'>03.</span>Projetos
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center transition-all duration-500 ease bgred-300 mb-10">

                        <div className="max-w-[320px] transition-all duration-500 ease mb-3 sm:mb-0">
                            <img className="rounded-lg w-full h-auto" src={img2} alt="Projeto Sistema de Login" />
                        </div>

                        <div className="w-full md:max-w-[50%] sm:ml-4 transition-all duration-500 ease font-medium text-start">

                            <a href="https://github.com/NiedjaMarques/Sistema-de-Autentica--o" target="_blank" className=" text-2xl transition-all duration-500 ease hover:underline text-amarelo cursor-pointer">
                                Sistema de Login
                            </a>

                            <p className='pt-4'>
                                Desenvolvi um Sistema de Login utilizando PHP, MVC, HTML, Tailwind CSS e MySQL. Implementei funcionalidades de autenticação com gestão de sessões, criptografia de senhas no banco de dados e páginas de erro personalizadas para segurança adicional. Este projeto demonstra minhas habilidades em desenvolvimento web orientado a objetos, garantindo uma experiência de usuário segura e eficiente.
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-col sm:flex-row-reverse items-center justify-center transition-all duration-500 ease bgred-300 mb-10">

                        <div className="max-w-[320px] transition-all duration-500 ease mb-3 sm:mb-0">
                            <img className="rounded-lg w-full h-auto" src={img3} alt="Projeto Sistema de Login" />
                        </div>

                        <div className="w-full md:max-w-[50%] mr-2 sm:ml-4 transition-all duration-500 ease font-medium text-start">

                            <a href="https://github.com/NiedjaMarques/projeto-login" target="_blank" className="text-2xl transition-all duration-500 ease hover:underline text-amarelo cursor-pointer">
                                Página de Login Responsiva
                            </a>

                            <p className="pt-4">
                                Um dos meus primeiros projetos foi criar uma página de login utilizando apenas HTML e CSS, focando em design responsivo. Esta iniciativa não apenas me permitiu explorar os fundamentos do desenvolvimento web, mas também desenvolver habilidades essenciais em design de interfaces acessíveis, garantindo que a página se ajustasse perfeitamente em diferentes tamanhos de tela, oferecendo uma experiência de usuário consistente em desktops, tablets e smartphones.
                            </p>

                        </div>

                    </div>   

                    <div className="flex flex-col sm:flex-row items-center justify-center transition-all duration-500 ease bgred-300 mb-10">

                        <div className="max-w-[320px] transition-all duration-500 ease mb-3 sm:mb-0">
                            <img className="rounded-lg w-full h-auto" src={img4} alt="Projeto Sistema de Login" />
                        </div>

                        <div className="w-full md:max-w-[50%] sm:ml-4 transition-all duration-500 ease font-medium text-start">

                            <a href="https://github.com/NiedjaMarques/Projeto_Hamburgueria" target="_blank" className="text-2xl transition-all duration-500 ease hover:underline text-amarelo cursor-pointer">
                                Projeto Hamburgueria
                            </a>

                            <p className="pt-4">
                                Desenvolvi um cardápio interativo para uma hamburgueria utilizando Tailwind CSS, HTML, JavaScript e Node.js. Este projeto permitiu aos clientes visualizar de forma intuitiva os itens disponíveis, preços e descrições detalhadas dos hambúrgueres e acompanhamentos. Além de apresentar informações detalhadas, implementei funcionalidades que direcionam os clientes ao WhatsApp para finalizar seus pedidos, proporcionando uma experiência de compra simplificada e direta.
                            </p>
                        </div>

                    </div>                   

                </div>

            </section>
        </>
    )
}

export default Projetos;