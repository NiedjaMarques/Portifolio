import img2 from '../../../app/view/imagens/ProjetoSistemadeLogin.png'
import img3 from '../../../app/view/imagens/ProjetoLoginFront.png'
import img4 from '../../../app/view/imagens/ProjetoHamburgueria.png'

const Projetos = () => {
    return (
        <>
            <section className="py-10 bg-verde-menta">

                <h1 className="text-3xl text-azul-escuro sm:text-4xl font-bold p-4 text-center mb-12 transition-all duration-500 ease">
                    Projetos
                </h1>

                <div className="container px-4 mx-auto py-10 space-y-20">

                    <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center transition-all duration-500 ease">

                        <div className="w-full sm:w-[45%] md:w-[40%] transition-all duration-500 ease">
                            <img className="rounded-lg" src={img2} alt="Projeto Sistema de Login" />
                        </div>

                        <div className="text-azul-escuro text-start w-full md:w-[45%] mt-4 sm:mt-0 sm:ml-4 transition-all duration-500 ease group relative font-medium">

                            <h1 className="text-lg md:text-2xl transition-all duration-500 ease">
                                Sistema de Login
                            </h1>

                            <p className="font-medium text-md py-4">
                                Desenvolvi um sistema de autenticação incorporando HTML, Tailwind CSS, PHP e um banco de dados MySQL. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque autem voluptates nam. Laudantium a numquam autem voluptatum cum consequatur, adipisci voluptates nemo similique ad placeat est dolor iure corporis dicta!
                            </p>
                            
                            <a href="https://github.com/NiedjaMarques/Sistema-de-Autentica--o" target="_blank">
                                <button className="px-4 py-2 bg-azul-escuro text-cinza-claro rounded shadow-md shadow-azul-escuro transition-all duration-500 ease">
                                    GITHUB
                                </button>
                            </a>

                        </div>

                    </div>

                    <div className="flex flex-col sm:flex-row-reverse sm:space-x-4 items-center justify-center transition-all duration-500 ease">

                        <div className="w-full sm:w-[45%] md:w-[40%] transition-all duration-500 ease">
                            <img className="rounded-lg" src={img3} alt="Projeto Sistema de Login" />
                        </div>

                        <div className="text-azul-escuro text-start w-full md:w-[45%] mt-4 sm:mt-0 sm:ml-4 transition-all duration-500 ease group relative font-medium">

                            <h1 className="text-lg md:text-2xl transition-all duration-500 ease">
                                Projeto login
                            </h1>

                            <p className="font-medium text-md py-4">
                                Desenvolvi um sistema de autenticação incorporando HTML, Tailwind CSS, PHP e um banco de dados MySQL. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque autem voluptates nam. Laudantium a numquam autem voluptatum cum consequatur, adipisci voluptates nemo similique ad placeat est dolor iure corporis dicta!
                            </p>
                            
                            <a href="https://github.com/NiedjaMarques/projeto-login" target="_blank">
                                <button className="px-4 py-2 bg-azul-escuro text-cinza-claro rounded shadow-md shadow-azul-escuro transition-all duration-500 ease">
                                    GITHUB
                                </button>
                            </a>

                        </div>

                    </div>   

                    <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center transition-all duration-500 ease">

                        <div className="w-full sm:w-[45%] md:w-[40%] transition-all duration-500 ease">
                            <img className="rounded-lg" src={img4} alt="Projeto Sistema de Login" />
                        </div>

                        <div className="text-azul-escuro text-start w-full md:w-[45%] mt-4 sm:mt-0 sm:ml-4 transition-all duration-500 ease group relative font-medium">

                            <h1 className="text-lg md:text-2xl transition-all duration-500 ease">
                                Projeto Hamburgueria
                            </h1>

                            <p className="font-medium text-md py-4">
                                Cardápio interativo, permitindo aos clientes visualizar os itens disponíveis, preços , linguagens. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quisquam eligendi perferendis velit excepturi id provident distinctio ad cupiditate autem laborum, quia reiciendis ea, dolores labore ut necessitatibus modi saepe.
                            </p>
                            
                            <a href="https://github.com/NiedjaMarques/Projeto_Hamburgueria" target="_blank">
                                <button className="px-4 py-2 bg-azul-escuro text-cinza-claro rounded shadow-md shadow-azul-escuro transition-all duration-500 ease">
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