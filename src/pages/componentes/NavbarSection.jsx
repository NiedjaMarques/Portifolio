import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import { FaHouse, FaUser, FaDiagramProject, FaPhone, FaList, FaAlignRight, FaX } from "react-icons/fa6";

const Logo = () => (
    <h1 className='flex items-center justify-center text-xl sm:text-2xl font-bold h-16 my-1 text-center'>
        niedja <span className='text-amarelo'>.</span> marques 
    </h1>
)

const NavLinks = () => {
    const headerHeight = 72;

    useEffect(() => {
        scroll.scrollToTop({
          duration: 500,
        })
    }, [])    
    
    return(
    <>
        <div className='hidden sm:block'>
            <div className='ml-10 flex items-baseline space-x-4 '>
                <ScrollLink smooth={true} duration={500} to="home" offset={-headerHeight} className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-cinza-claro"><span className='text-rosa'>01.</span>Home</ScrollLink>
                <ScrollLink smooth={true} duration={500} to="about" offset={-headerHeight} className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-cinza-claro"><span className='text-amarelo'>02.</span>About</ScrollLink>
                <ScrollLink smooth={true} duration={500} to="projects" offset={-headerHeight} className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-cinza-claro"><span className='text-azul-claro'>03.</span>Projects</ScrollLink>
                {/* <ScrollLink smooth={true} duration={500} to="skills" offset={-headerHeight} className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-cinza-claro"><span className='text-verde'>04.</span>Skills</ScrollLink> */}
                <ScrollLink smooth={true} duration={500} to="contact" offset={-headerHeight} className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-cinza-claro"><span className='text-verde'>04.</span>Contact</ScrollLink>
            </div>
        </div>
    </>
    )
}

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headerHeight = 72;

    return (
        <>
            <div className='sm:hidden'>

                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2" aria-controls="mobile-menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>

                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {isOpen ? (
                    <FaX className='text-xl text-rosa' />
                ) : (
                    <FaAlignRight className='text-2xl text-rosa' />
                )}

                </button>

                {isOpen && (
                    <div className='absolute right-0 top-20 space-y-2 sm:hidden bg-azul-escuro border rounded-l-md'>

                    <ScrollLink to="home" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer block px-4 py-2" title='Home'>
                        <FaHouse className='text-rosa text-xl'/>
                    </ScrollLink>    

                    <ScrollLink to="about" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer block px-4 py-2" title='About'>
                        <FaUser className='text-amarelo text-xl'/>                     
                    </ScrollLink>

                    <ScrollLink to="projects" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer block px-4 py-2" title='projects'>
                        <FaDiagramProject className='text-azul-claro text-xl'/>
                    </ScrollLink>

                    {/* <ScrollLink to="skills" smooth={true} duration={500} offset={-headerHeight} className="block px-4 py-2" title='Skills'>
                        <FaList className=' text-xl'/>
                    </ScrollLink> */}

                    <ScrollLink to="contact" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer block px-4 py-2" title='Contact'>
                        <FaPhone className='text-verde text-xl'/>
                    </ScrollLink>
                    </div>
                )}

            </div>        
        </>
    )
}

const Navbar = () => (
    <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
            <Logo />
            <NavLinks />
            <MobileMenu />
        </div>
    </nav>
)

export default Navbar