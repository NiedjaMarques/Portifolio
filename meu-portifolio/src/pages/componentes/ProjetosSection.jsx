// import React, { useState, useEffect } from 'react';

// const Projetos = () => {
    
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const slides = [
//         {
//             image: "../../../app/view/imagens/ProjetoSistemadeLogin.png",
//             title: "Sistema de Autenticação",
//             description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus neque aliquam voluptatum consequatur pariatur soluta excepturi fuga perferendis, odio, maiores voluptatibus sequi enim asperiores maxime accusamus, non id vel hic."
//         },
//         {
//             image: "../../../app/view/imagens/ProjetoHamburgueria.png",
//             title: "Projeto Hamburgueria",
//             description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus neque aliquam voluptatum consequatur pariatur soluta excepturi fuga perferendis, odio, maiores voluptatibus sequi enim asperiores maxime accusamus, non id vel hic."
//         },
//         {
//             image: "../../../app/view/imagens/ProjetoLoginFront.png",
//             title: "Projeto Login",
//             description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus neque aliquam voluptatum consequatur pariatur soluta excepturi fuga perferendis, odio, maiores voluptatibus sequi enim asperiores maxime accusamus, non id vel hic."
//         },
//         {
//             image: "../../../app/view/imagens/ProjetoCordel.png",
//             title: "Projeto Cordel",
//             description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus neque aliquam voluptatum consequatur pariatur soluta excepturi fuga perferendis, odio, maiores voluptatibus sequi enim asperiores maxime accusamus, non id vel hic."
//         },
//     ]


const Projetos = () => {
    return (
        <>
            <div className="bg-[#562300] pt-20">

                <h1 className="text-3xl sm:text-4xl font-bold text-[#D5BAA6] p-4 text-start bg-[#562300]">
                    Projetos
                </h1>

                <div className="px-4 mx-auto flex items-center justify-center md:flex-col">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

                        <a href="https://github.com/NiedjaMarques/Sistema-de-Autentica--o" target="_blank" className="p-4 mx-auto items-center justify-center flex flex-col border ml-2 my-2 rounded-lg border-[#D5BAA6] transition hover:border-[#562300] ease-in-out hover:bg-[#D5BAA6] hover:text-[#562300] text-[#D5BAA6] group relative">

                            <img className="block object-cover rounded-lg max-h-[180px]" src="../../../app/view/imagens/ProjetoSistemadeLogin.png" alt="" />

                            <p className="text-center font-medium text-lg pt-4">
                                Sistema-de-Login
                            </p>

                            <p className="text-center  font-medium text-sm mb-2 p-4">
                            Desenvolvi um sistema de autenticação incorporando HTML, Tailwind CSS, PHP e um banco de dados MySQL.
                            </p>

                            <p className="text-xl text-[#562300] font-medium pb-4 hidden group-hover:block absolute -bottom-3 left-0 ml-2">
                               Concluído 
                            </p>
                        </a>

                        <a href="https://github.com/NiedjaMarques/GGS" target="_blank" className="p-4 mx-auto items-center justify-center flex flex-col border ml-2 my-2 rounded-lg border-[#D5BAA6] transition hover:border-[#562300] ease-in-out hover:bg-[#D5BAA6] hover:text-[#562300] text-[#D5BAA6] relative group">
                    
                        <img className="block object-cover rounded-lg max-h-[180px]" src="../../../app/view/imagens/Projetositeggs.png" alt="" />

                        <p className="text-center font-medium text-lg pt-4">
                            GGS
                        </p>

                        <p className="text-center font-medium text-sm mb-2 p-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia odio ea cumque eaque ullam quo id?
                        </p>

                        <p className="text-xl text-[#562300] font-medium pb-4 hidden group-hover:block absolute -bottom-3 left-0 ml-2">
                            Em andamento 
                        </p>
                        </a>

                        <a href="https://github.com/NiedjaMarques/projeto-login" target="_blank" className="p-4 mx-auto items-center justify-center flex flex-col border ml-2 my-2 rounded-lg border-[#D5BAA6] transition hover:border-[#562300] ease-in-out hover:bg-[#D5BAA6] hover:text-[#562300] text-[#D5BAA6] group relative">
                    
                        <img className="block object-cover rounded-lg  max-h-[180px]" src=".../../../app/view/imagens/ProjetoLoginFront.png" alt="" />

                        <p className="text-center font-medium text-lg pt-4">
                            Projeto-login
                        </p>

                        <p className="text-center font-medium text-sm mb-2 p-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia odio ea cumque eaque ullam quo id? 
                        </p>

                        <p className="text-xl text-[#562300] font-medium pb-4 hidden group-hover:block absolute -bottom-3 left-0 ml-2">
                        Concluído 
                        </p>
                        </a>

                        <a href="https://github.com/NiedjaMarques/Projeto_Hamburgueria" target="_blank" className="p-4 mx-auto items-center justify-center flex flex-col border ml-2 my-2 rounded-lg border-[#D5BAA6] transition hover:border-[#562300] ease-in-out hover:bg-[#D5BAA6] hover:text-[#562300] text-[#D5BAA6] group relative">
                    
                        <img className="block object-cover rounded-lg  max-h-[180px]" src="../../../app/view/imagens/ProjetoHamburgueria.png" alt="" />

                        <p className="text-center font-medium text-lg pt-4">
                            Projeto Hamburgueria
                        </p>

                        <p className="text-center font-medium text-sm mb-2 p-4">
                        Cardápio interativo, permitindo aos clientes visualizar os itens disponíveis, preços , linguagens.
                        </p>

                        <p className="text-xl text-[#562300] font-medium pb-4 hidden group-hover:block absolute -bottom-3 left-0 ml-2">
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