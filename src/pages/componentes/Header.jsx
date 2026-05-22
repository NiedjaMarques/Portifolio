import React, { useEffect, useState} from 'react';
import Navbar from './NavbarSection';

// Header fixo que muda de estilo ao rolar a página.
const Header = () => { 
    const [scroll, setScroll] = useState(false); // controla se houve scroll

    useEffect(() => {
        const handleScroll = () => { 
            setScroll(window.scrollY > 0); // ativa quando desce a página
        };

        window.addEventListener('scroll', handleScroll); // escuta o scroll

        return() => {
            window.removeEventListener('scroll', handleScroll); // limpa o listener
        };

    }, []);

    return(
        <>
            <header className={`fixed top-0 left-0 z-20 w-full transition duration-500 ${scroll ? 'bg-preto shadow-sm shadow-slate-50 ' : 'bg-preto'}`}>      
                <Navbar />
            </header>                      
        </>
    )
}
export default Header

// NÃO PRECISA DE MAIS AJUSTES 29/04/2026