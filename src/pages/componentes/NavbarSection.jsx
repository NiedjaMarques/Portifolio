import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import { FaHouse, FaUser, FaDiagramProject, FaPhone, FaList, FaAlignRight, FaX } from "react-icons/fa6";

// Altura do header fixo — usada para compensar o offset dos ScrollLinks
const headerHeight = 72;

// Lista de seções da página
const nav_items = ["home", "about", "projects", "skills", "contact"];

// Logo da navbar
const Logo = () => (
    <h1 className='flex items-center justify-center text-xl sm:text-2xl font-bold h-16 my-1'>
        N <span className='text-verde'>.</span> M 
    </h1>
)

// Links de navegação — visíveis apenas no desktop
const NavLinks = () => {

    // Rola para o topo automaticamente ao carregar a página
    useEffect(() => {
        scroll.scrollToTop({ duration: 500 })
    }, [])    
    
    return(
        <div className='hidden sm:block'>
            <div className='flex items-baseline space-x-4'>

                {/* Para cada item do nav_items, cria um link */}
                {nav_items.map((item) => (
                    <ScrollLink
                        key={item}
                        smooth={true}
                        duration={500}
                        to={item}
                        offset={-headerHeight}
                        className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-cinza-claro"
                    >
                        {/* Coloca a primeira letra em maiúscula: "home" → "Home" */}
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </ScrollLink>
                ))}

            </div>
        </div>
    )
}

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const icons = {
        home: <FaHouse className='text-rosa text-xl' />,
        about: <FaUser className='text-amarelo text-xl' />,
        projects: <FaDiagramProject className='text-azul-claro text-xl' />,
        skills: <FaList className='text-verde text-xl' />,
        contact: <FaPhone className='text-rosa text-xl' />,
    };

    return (
        <div className='sm:hidden'>

            {/* Botão toggle */}
            <button
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2"
            >
                <span className="sr-only">Toggle menu</span>

                {isOpen
                    ? <FaX className='text-xl text-rosa' />
                    : <FaAlignRight className='text-2xl text-rosa' />
                }
            </button>

            {/* Menu */}
            {isOpen && (
                <div
                    id="mobile-menu"
                    className='absolute right-0 top-20 space-y-2 bg-azul-escuro border rounded-l-md'
                >
                    {nav_items.map((item) => (
                        <ScrollLink
                            key={item}
                            to={item}
                            smooth
                            duration={500}
                            offset={-headerHeight}
                            className="block px-4 py-2"
                            title={item}
                            onClick={() => setIsOpen(false)} // 👈 fecha ao clicar
                        >
                            {icons[item]}
                        </ScrollLink>
                    ))}
                </div>
            )}

        </div>
    );
};

const Navbar = () => (
    <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full bg-preto">

            {/* esquerda */}
            <div className="flex items-center justify-between gap-4 sm:gap-20">
                <Logo />
                <NavLinks />
            </div>

            {/* direita (mobile) */}
            <MobileMenu />

        </div>
    </nav>
);

export default Navbar

// NÃO PRECISA DE MAIS AJUSTES 06/05/2026