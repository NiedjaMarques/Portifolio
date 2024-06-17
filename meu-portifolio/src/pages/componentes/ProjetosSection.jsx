const Projetos = () => {
    return (
        <>
            <div className="pt-20 ">

                <h1 className="text-3xl sm:text-4xl font-bold text-[#D5BAA6] p-4 text-start">
                    Projetos
                </h1>

                <div className="px-4 mx-auto flex items-center justify-center">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                        <a href="https://github.com/NiedjaMarques/Sistema-de-Autentica--o" target="_blank" className="p-4 mx-auto items-center justify-center flex flex-col border rounded-lg border-[#D5BAA6] transition hover:border-[#562300] ease-in-out hover:bg-[#D5BAA6] hover:text-[#252024] text-[#D5BAA6] group relative h-full w-full">

                            <img className="block object-cover rounded-lg" src="../../../app/view/imagens/ProjetoSistemadeLogin.png" alt="ProjetoSistemadeLogin" />

                            <p className="text-center font-medium text-lg pt-4">
                                Sistema-de-Login
                            </p>

                            <p className="text-center  font-medium text-sm mb-2 p-4">
                            Desenvolvi um sistema de autenticação incorporando HTML, Tailwind CSS, PHP e um banco de dados MySQL.
                            </p>

                            <p className="text-xl text-[#252024] font-medium pb-4 hidden group-hover:block absolute -bottom-3 left-0 ml-2">
                               Concluído 
                            </p>
                        </a>

                        <a href="https://github.com/NiedjaMarques/GGS" target="_blank" className="p-4 mx-auto items-center justify-center flex flex-col border rounded-lg border-[#D5BAA6] transition hover:border-[#562300] ease-in-out hover:bg-[#D5BAA6] hover:text-[#252024] text-[#D5BAA6] group relative h-full w-full">
                    
                            <img className="block object-cover rounded-lg " src="../../../app/view/imagens/Projetositeggs.png" alt="Projetositeggs" />

                            <p className="text-center font-medium text-lg pt-4">
                                GGS
                            </p>

                            <p className="text-center font-medium text-sm mb-2 p-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia odio ea cumque eaque ullam quo id?
                            </p>

                            <p className="text-xl text-[#252024] font-medium pb-4 hidden group-hover:block absolute -bottom-3 left-0 ml-2">
                                Em andamento 
                            </p>
                        </a>

                        <a href="https://github.com/NiedjaMarques/projeto-login" target="_blank" className="p-4 mx-auto items-center justify-center flex flex-col border rounded-lg border-[#D5BAA6] transition hover:border-[#562300] ease-in-out hover:bg-[#D5BAA6] hover:text-[#252024] text-[#D5BAA6] group relative h-full w-full">
                        
                            <img className="block object-cover rounded-lg " src=".../../../app/view/imagens/ProjetoLoginFront.png" alt="ProjetoLoginFront" />

                            <p className="text-center font-medium text-lg pt-4">
                                Projeto-login
                            </p>

                            <p className="text-center font-medium text-sm mb-2 p-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia odio ea cumque eaque ullam quo id? 
                            </p>

                            <p className="text-xl text-[#252024] font-medium pb-4 hidden group-hover:block absolute -bottom-3 left-0 ml-2">
                            Concluído 
                            </p>
                        </a>

                        <a href="https://github.com/NiedjaMarques/Projeto_Hamburgueria" target="_blank" className="p-4 mx-auto items-center justify-center flex flex-col border rounded-lg border-[#D5BAA6] transition hover:border-[#562300] ease-in-out hover:bg-[#D5BAA6] hover:text-[#252024] text-[#D5BAA6] group relative h-full w-fulll">
                    
                            <img className="block object-cover rounded-lg " src="../../../app/view/imagens/ProjetoHamburgueria.png" alt="ProjetoHamburgueria" />

                            <p className="text-center font-medium text-lg pt-4">
                                Projeto Hamburgueria
                            </p>

                            <p className="text-center font-medium text-sm mb-2 p-4">
                            Cardápio interativo, permitindo aos clientes visualizar os itens disponíveis, preços , linguagens.
                            </p>

                            <p className="text-xl text-[#252024] font-medium pb-4 hidden group-hover:block absolute -bottom-3 left-0 ml-2">
                                Concluído
                            </p>
                        </a>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Projetos;