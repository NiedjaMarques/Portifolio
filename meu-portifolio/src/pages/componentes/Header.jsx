import React, { useEffect, useState } from 'react';//hook's useState para rastrear o estado da pagina, nesse caso o scroll / useEffect para adiciona o evento scroll 
import Navbar from './NavbarSection';

function Header(){
    const [scroll, setScroll] = useState(false); //declaro uma variavel de estado scroll e uma função setScroll para atualiza-la, inicialmente 'scroll' é false, useState acompanha se a pagina foi rolada ou não

    useEffect(() => { //inicialização do hook, adicionando um evento
        const handleScroll = () => { //declara uma função, essa função será chamada sempre que existir um evento de rolagem
            setScroll(window.scrollY > 0); //atualização do estado 'scroll' com a função setScroll que verifica se a pagina foi rolada
        };

        window.addEventListener('scroll', handleScroll); //adiciona o evento sempre que o usuario rolar a pagina

        return() => {
            window.removeEventListener('scroll', handleScroll); //remove o event listener 
        };

    }, []);//array vazio faz com que o efeito só seja executado uma vez
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <header className={`fixed top-0 left-0 z-20 w-full transition duration-500  ${scroll ? 'bg-[#252024] shadow-lg  shadow-[#252024d6]' : ''}`} id="header">      
                <Navbar />
                <hr />
            </header>                      
        </>
    )
}
export default Header