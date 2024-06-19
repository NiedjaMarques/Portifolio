import img2 from '../../../app/view/imagens/ProjetoSistemadeLogin.png'
import img3 from '../../../app/view/imagens/ProjetoLoginFront.png'
import img4 from '../../../app/view/imagens/ProjetoHamburgueria.png'

const Projetos = () => {
    return (
        <>
            <section className="py-10 bg-azul-escuro">
                <hr />
                <h1 className=" text-3xl text-cinza-claro sm:text-4xl font-bold p-4 text-center transition-all duration-500 ease">
                    Projetos
                </h1>

                <div className="container px-4 mx-auto py-10 space-y-20">

                    <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center transition-all duration-500 ease">

                        <div className="w-full sm:w-[45%] md:w-[40%] transition-all duration-500 ease">
                            <img className="rounded-lg" src={img2} alt="Projeto Sistema de Login" />
                        </div>

                        <div className="text-cinza-claro w-full md:w-[45%] mt-4 sm:mt-0 sm:ml-4 transition-all duration-500 ease group relative font-medium leading-relaxed text-start">

                            <h1 className="text-lg md:text-2xl transition-all duration-500 ease">
                                Sistema de Login
                            </h1>

                            <p className="py-2">
                            Desenvolvi um Sistema de Login utilizando PHP, MVC, HTML, Tailwind CSS e MySQL. Implementei funcionalidades de autenticação com gestão de sessões, criptografia de senhas no banco de dados e páginas de erro personalizadas para segurança adicional.
                            </p>

                            <p className='py-2'>Este projeto demonstra minhas habilidades em desenvolvimento web orientado a objetos, garantindo uma experiência de usuário segura e eficiente.</p>
                            
                            <a href="https://github.com/NiedjaMarques/Sistema-de-Autentica--o" target="_blank">
                                <button className="px-4 py-2 bg-cinza-claro text-azul-escuro rounded shadow-md transition-all duration-500 ease">
                                    GITHUB
                                </button>
                            </a>

                        </div>

                    </div>

                    <div className="flex flex-col sm:flex-row-reverse sm:space-x-4 items-center justify-center transition-all duration-500 ease">

                        <div className="w-full sm:w-[45%] md:w-[40%] transition-all duration-500 ease sm:ml-5">
                            <img className="rounded-lg" src={img3} alt="Projeto Sistema de Login" />
                        </div>

                        <div className="text-cinza-claro w-full md:w-[45%] mt-4 sm:mt-0 sm:ml-4 transition-all duration-500 ease group relative font-medium leading-relaxed text-start">

                            <h1 className="text-lg md:text-2xl transition-all duration-500 ease">
                                Página de Login Responsiva
                            </h1>

                            <p className=" py-4">
                                Um dos meus primeiros projetos foi criar uma página de login utilizando apenas HTML e CSS, focando em design responsivo. Esta iniciativa não apenas me permitiu explorar os fundamentos do desenvolvimento web, mas também desenvolver habilidades essenciais em design de interfaces acessíveis, garantindo que a página se ajustasse perfeitamente em diferentes tamanhos de tela, oferecendo uma experiência de usuário consistente em desktops, tablets e smartphones.
                            </p>
                            
                            <a href="https://github.com/NiedjaMarques/projeto-login" target="_blank">
                                <button className="px-4 py-2 bg-cinza-claro text-azul-escuro rounded shadow-md transition-all duration-500 ease">
                                    GITHUB
                                </button>
                            </a>

                        </div>

                    </div>   

                    <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center transition-all duration-500 ease ">

                        <div className="w-full sm:w-[45%] md:w-[40%] transition-all duration-500 ease">
                            <img className="rounded-lg" src={img4} alt="Projeto Sistema de Login" />
                        </div>

                        <div className="text-cinza-claro w-full md:w-[45%] mt-4 sm:mt-0 sm:ml-4 transition-all duration-500 ease group relative font-medium leading-relaxed text-start">

                            <h1 className="text-lg md:text-2xl transition-all duration-500 ease">
                                Projeto Hamburgueria
                            </h1>

                            <p className="py-2">
                            Desenvolvi um cardápio interativo para uma hamburgueria utilizando Tailwind CSS, HTML, JavaScript e Node.js. Este projeto permitiu aos clientes visualizar de forma intuitiva os itens disponíveis, preços e descrições detalhadas dos hambúrgueres e acompanhamentos.
                            </p>

                            <p className='py-2'>
                                Além de apresentar informações detalhadas, implementei funcionalidades que direcionam os clientes ao WhatsApp para finalizar seus pedidos, proporcionando uma experiência de compra simplificada e direta.
                            </p>
                            
                            <a href="https://github.com/NiedjaMarques/Projeto_Hamburgueria" target="_blank">
                                <button className="px-4 py-2 bg-cinza-claro text-azul-escuro rounded shadow-md transition-all duration-500 ease">
                                    GITHUB
                                </button>
                            </a>

                        </div>

                    </div>                   

                </div>

            </section>
        </>
    )
}

export default Projetos;