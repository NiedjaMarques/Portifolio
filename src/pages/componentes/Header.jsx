import React, { useEffect, useState } from 'react';
import Navbar from './NavbarSection';

function Header(){
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => { 
            setScroll(window.scrollY > 0); 
        };

        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return(
        <>
            <header className={`fixed top-0 left-0 z-20 w-full transition duration-500 ${scroll ? 'bg-azul-escuro  shadow-lg shadow-[#252024d6]' : 'bg-azul-escuro'}`} id="header">      
                <Navbar />
            </header>                      
        </>
    )
}
export default Header