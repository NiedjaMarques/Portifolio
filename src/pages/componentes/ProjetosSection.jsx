import React from 'react';
import img2 from '../../../app/view/imagens/ProjetoSistemadeLogin.png'
import img3 from '../../../app/view/imagens/ProjetoLoginFront.png'
import img4 from '../../../app/view/imagens/ProjetoHamburgueria.png'
import img5 from '../../../app/view/imagens/portifolioimg.jpg'
import iconGithub from '../../../app/view/icons/icons8-github.svg'

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

                        <div className='sm:max-w-[40%] sm:mr-5 '>
                            <img className="w-full mb-4 transition-all duration-500 ease rounded-lg" src={img2} alt="Projeto Sistema de Login" />
                        </div>

                        <div className='sm:max-w-[50%]'>

                            <div className='flex items-center transition-all duration-500 ease'>
                                <a href="https://github.com/NiedjaMarques/Sistema-de-Autentica--o" target="_blank" className="transition-all duration-500 ease hover:underline mb-4 text-azul-claro font-bold cursor-pointer text-lg">
                                &lt;a&gt;Sistema de Login&lt;/a&gt;
                                </a>

                                <a href="https://github.com/NiedjaMarques/Sistema-de-Autentica--o" target="_blank" className='sm:ml-4 mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#2C7BE1" className='hover:fill-white transition-all duration-500 ease' viewBox="0 0 64 64" width="30px" height="30px"><path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 40.238706 44.458716 47.16934 36.904297 49.306641 C 36.811496 49.1154 36.747844 48.905917 36.753906 48.667969 C 36.784906 47.458969 36.753906 44.637563 36.753906 43.601562 C 36.753906 41.823563 35.628906 40.5625 35.628906 40.5625 C 35.628906 40.5625 44.453125 40.662094 44.453125 31.246094 C 44.453125 27.613094 42.554688 25.720703 42.554688 25.720703 C 42.554688 25.720703 43.551984 21.842266 42.208984 20.197266 C 40.703984 20.034266 38.008422 21.634812 36.857422 22.382812 C 36.857422 22.382813 35.034 21.634766 32 21.634766 C 28.966 21.634766 27.142578 22.382812 27.142578 22.382812 C 25.991578 21.634813 23.296016 20.035266 21.791016 20.197266 C 20.449016 21.842266 21.445312 25.720703 21.445312 25.720703 C 21.445312 25.720703 19.546875 27.611141 19.546875 31.244141 C 19.546875 40.660141 28.371094 40.5625 28.371094 40.5625 C 28.371094 40.5625 27.366329 41.706312 27.265625 43.345703 C 26.675939 43.553637 25.872132 43.798828 25.105469 43.798828 C 23.255469 43.798828 21.849984 42.001922 21.333984 41.169922 C 20.825984 40.348922 19.7845 39.660156 18.8125 39.660156 C 18.1725 39.660156 17.859375 39.981656 17.859375 40.347656 C 17.859375 40.713656 18.757609 40.968484 19.349609 41.646484 C 20.597609 43.076484 20.574484 46.292969 25.021484 46.292969 C 25.547281 46.292969 26.492043 46.171872 27.246094 46.068359 C 27.241926 47.077908 27.230199 48.046135 27.246094 48.666016 C 27.251958 48.904708 27.187126 49.114952 27.09375 49.306641 C 19.540258 47.168741 14 40.238046 14 32 C 14 22.059 22.059 14 32 14 z"/></svg>
                                </a>
                            </div>

                            <p>
                                Desenvolvi um Sistema de Login utilizando <span className='text-azul-claro font-bold'>PHP</span>, <span className='text-azul-claro font-bold'>HTML</span>, <span className='text-azul-claro font-bold'>Tailwind CSS</span> e <span className='text-azul-claro font-bold'>MySQL</span>. Implementei funcionalidades de autenticação com gestão de sessões, criptografia de senhas no banco de dados e páginas de erro personalizadas para segurança adicional, garantindo uma experiência de usuário segura e eficiente. Também utilizei minhas habilidades em <span className='text-azul-claro font-bold'>MVC</span> e <span className='text-azul-claro font-bold'>POO</span>.
                            </p>

                        </div>                       

                    </div>

                    <div className='transition-all duration-300 ease-in flex flex-col sm:flex-row-reverse items-center'>

                        <div className='sm:max-w-[50%] sm:ml-5 border rounded-lg p-4'>
                            <img className="w-full mb-4 transition-all duration-500 ease rounded-lg" src={img5} alt="Projeto Portifólio" />
                        </div>

                        <div className='sm:max-w-[50%] '>

                            <div className='flex items-center transition-all duration-500 ease mt-4'>

                                <a href="https://portifolio-tau-orpin.vercel.app/" target="_blank" className="transition-all duration-500 ease hover:underline mb-4 text-azul-claro font-bold cursor-pointer text-lg">
                                &lt;a&gt;Meu Portifólio&lt;/a&gt;
                                </a>

                                <a href="https://github.com/NiedjaMarques/Portifolio" target="_blank" className=' sm:ml-4 mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#2C7BE1" className='hover:fill-white transition-all duration-500 ease'  viewBox="0 0 64 64" width="30px" height="30px"><path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 40.238706 44.458716 47.16934 36.904297 49.306641 C 36.811496 49.1154 36.747844 48.905917 36.753906 48.667969 C 36.784906 47.458969 36.753906 44.637563 36.753906 43.601562 C 36.753906 41.823563 35.628906 40.5625 35.628906 40.5625 C 35.628906 40.5625 44.453125 40.662094 44.453125 31.246094 C 44.453125 27.613094 42.554688 25.720703 42.554688 25.720703 C 42.554688 25.720703 43.551984 21.842266 42.208984 20.197266 C 40.703984 20.034266 38.008422 21.634812 36.857422 22.382812 C 36.857422 22.382813 35.034 21.634766 32 21.634766 C 28.966 21.634766 27.142578 22.382812 27.142578 22.382812 C 25.991578 21.634813 23.296016 20.035266 21.791016 20.197266 C 20.449016 21.842266 21.445312 25.720703 21.445312 25.720703 C 21.445312 25.720703 19.546875 27.611141 19.546875 31.244141 C 19.546875 40.660141 28.371094 40.5625 28.371094 40.5625 C 28.371094 40.5625 27.366329 41.706312 27.265625 43.345703 C 26.675939 43.553637 25.872132 43.798828 25.105469 43.798828 C 23.255469 43.798828 21.849984 42.001922 21.333984 41.169922 C 20.825984 40.348922 19.7845 39.660156 18.8125 39.660156 C 18.1725 39.660156 17.859375 39.981656 17.859375 40.347656 C 17.859375 40.713656 18.757609 40.968484 19.349609 41.646484 C 20.597609 43.076484 20.574484 46.292969 25.021484 46.292969 C 25.547281 46.292969 26.492043 46.171872 27.246094 46.068359 C 27.241926 47.077908 27.230199 48.046135 27.246094 48.666016 C 27.251958 48.904708 27.187126 49.114952 27.09375 49.306641 C 19.540258 47.168741 14 40.238046 14 32 C 14 22.059 22.059 14 32 14 z"/></svg>
                                </a>
                            </div>

                            <p>
                            Desenvolvi um portfólio com o objetivo de apresentar meus trabalhos e habilidades para visitantes interessados em conhecer mais sobre mim como desenvolvedora. Utilizei <span className='text-azul-claro font-bold'>Tailwind CSS</span>, <span className='text-azul-claro font-bold'>React JS</span> e <span className='text-azul-claro font-bold'>HTML</span>, aplicando métodos de <span className='text-azul-claro font-bold'>POO</span> e o padrão <span className='text-azul-claro font-bold'>MVC</span>. Além disso, integrei o <span className='text-azul-claro font-bold'>Email.js</span> para permitir o envio de emails diretamente para minha conta do Google. Este projeto serve como um currículo digital, destacando minha experiência e competências técnicas de forma clara e organizada.
                            </p>

                        </div>

                    </div>

                    <div className='transition-all duration-300 ease-in flex flex-col sm:flex-row items-center'>

                        <div className='sm:max-w-[40%] sm:mr-5'>
                            <img className="w-full mb-4 transition-all duration-500 ease rounded-lg" src={img4} alt="Projeto Humburgueria" />
                        </div>

                        <div className='sm:max-w-[50%]'>

                            <div className='flex items-center transition-all duration-500 ease'>
                                <a href="https://projeto-hamburgueria-alpha.vercel.app/" target="_blank" className="transition-all duration-500 ease hover:underline mb-4 text-azul-claro font-bold cursor-pointer text-lg">
                                &lt;a&gt;Cardápio Hamburgueria&lt;/a&gt;
                                </a>

                                <a href="https://github.com/NiedjaMarques/Projeto_Hamburgueria" target="_blank"  className='sm:ml-4 mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#2C7BE1" className='hover:fill-white transition-all duration-500 ease' viewBox="0 0 64 64" width="30px" height="30px"><path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 40.238706 44.458716 47.16934 36.904297 49.306641 C 36.811496 49.1154 36.747844 48.905917 36.753906 48.667969 C 36.784906 47.458969 36.753906 44.637563 36.753906 43.601562 C 36.753906 41.823563 35.628906 40.5625 35.628906 40.5625 C 35.628906 40.5625 44.453125 40.662094 44.453125 31.246094 C 44.453125 27.613094 42.554688 25.720703 42.554688 25.720703 C 42.554688 25.720703 43.551984 21.842266 42.208984 20.197266 C 40.703984 20.034266 38.008422 21.634812 36.857422 22.382812 C 36.857422 22.382813 35.034 21.634766 32 21.634766 C 28.966 21.634766 27.142578 22.382812 27.142578 22.382812 C 25.991578 21.634813 23.296016 20.035266 21.791016 20.197266 C 20.449016 21.842266 21.445312 25.720703 21.445312 25.720703 C 21.445312 25.720703 19.546875 27.611141 19.546875 31.244141 C 19.546875 40.660141 28.371094 40.5625 28.371094 40.5625 C 28.371094 40.5625 27.366329 41.706312 27.265625 43.345703 C 26.675939 43.553637 25.872132 43.798828 25.105469 43.798828 C 23.255469 43.798828 21.849984 42.001922 21.333984 41.169922 C 20.825984 40.348922 19.7845 39.660156 18.8125 39.660156 C 18.1725 39.660156 17.859375 39.981656 17.859375 40.347656 C 17.859375 40.713656 18.757609 40.968484 19.349609 41.646484 C 20.597609 43.076484 20.574484 46.292969 25.021484 46.292969 C 25.547281 46.292969 26.492043 46.171872 27.246094 46.068359 C 27.241926 47.077908 27.230199 48.046135 27.246094 48.666016 C 27.251958 48.904708 27.187126 49.114952 27.09375 49.306641 C 19.540258 47.168741 14 40.238046 14 32 C 14 22.059 22.059 14 32 14 z"/></svg>
                                </a>
                            </div>

                            <p>
                                Desenvolvi um cardápio interativo utilizando <span className='text-azul-claro font-bold'>Tailwind CSS</span>, <span className='text-azul-claro font-bold'>HTML</span>, <span className='text-azul-claro font-bold'>JavaScript</span> e <span className='text-azul-claro font-bold'>Node.js</span>. Este projeto permite aos clientes visualizar os itens disponíveis, preços e descrições. Além disso, implementei funcionalidades que direcionam os clientes ao WhatsApp para finalizar seus pedidos, proporcionando uma experiência de compra simplificada e direta.
                            </p>

                        </div>

                    </div> 

                    <div className=' transition-all duration-300 ease-in flex flex-col sm:flex-row-reverse items-center'>

                        <div className='sm:max-w-[40%] sm:ml-5'>
                            <img className="w-full mb-4 transition-all duration-500 ease rounded-lg" src={img3} alt="Pagina de login responsiva" />
                        </div>                       

                        <div className='sm:max-w-[50%]'>

                            <div className='flex items-center transition-all duration-500 ease'>
                                <a href="https://projeto-login-pearl.vercel.app/" target="_blank" className="transition-all duration-500 ease hover:underline mb-4 text-azul-claro font-bold cursor-pointer text-lg">
                                &lt;a&gt;Login Responsivo&lt;/a&gt;
                                </a>

                                <a href="https://github.com/NiedjaMarques/projeto-login" className='sm:ml-4 mb-3' target="_blank" >
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="#2C7BE1" className='hover:fill-white transition-all duration-500 ease' viewBox="0 0 64 64" width="30px" height="30px"><path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 40.238706 44.458716 47.16934 36.904297 49.306641 C 36.811496 49.1154 36.747844 48.905917 36.753906 48.667969 C 36.784906 47.458969 36.753906 44.637563 36.753906 43.601562 C 36.753906 41.823563 35.628906 40.5625 35.628906 40.5625 C 35.628906 40.5625 44.453125 40.662094 44.453125 31.246094 C 44.453125 27.613094 42.554688 25.720703 42.554688 25.720703 C 42.554688 25.720703 43.551984 21.842266 42.208984 20.197266 C 40.703984 20.034266 38.008422 21.634812 36.857422 22.382812 C 36.857422 22.382813 35.034 21.634766 32 21.634766 C 28.966 21.634766 27.142578 22.382812 27.142578 22.382812 C 25.991578 21.634813 23.296016 20.035266 21.791016 20.197266 C 20.449016 21.842266 21.445312 25.720703 21.445312 25.720703 C 21.445312 25.720703 19.546875 27.611141 19.546875 31.244141 C 19.546875 40.660141 28.371094 40.5625 28.371094 40.5625 C 28.371094 40.5625 27.366329 41.706312 27.265625 43.345703 C 26.675939 43.553637 25.872132 43.798828 25.105469 43.798828 C 23.255469 43.798828 21.849984 42.001922 21.333984 41.169922 C 20.825984 40.348922 19.7845 39.660156 18.8125 39.660156 C 18.1725 39.660156 17.859375 39.981656 17.859375 40.347656 C 17.859375 40.713656 18.757609 40.968484 19.349609 41.646484 C 20.597609 43.076484 20.574484 46.292969 25.021484 46.292969 C 25.547281 46.292969 26.492043 46.171872 27.246094 46.068359 C 27.241926 47.077908 27.230199 48.046135 27.246094 48.666016 C 27.251958 48.904708 27.187126 49.114952 27.09375 49.306641 C 19.540258 47.168741 14 40.238046 14 32 C 14 22.059 22.059 14 32 14 z"/></svg>
                                </a>
                            </div>

                            <p>
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