import React, { useState } from 'react';
import imgLogo from '../../../app/view/imagens/oculosretangulo.jpg'

const Logo = () => (
    <div className='flex-shrink-0 '>
        <img className='h-16 w-16 rounded-full my-1' src={imgLogo} alt="imagem logo" />
    </div>
);
const NavLinks = () => (
    <div className='hidden sm:block'>
        <div className='ml-10 flex items-baseline space-x-4 '>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#FF4A00] hover:bg-[#252024] hover:text-white" aria-current="page">Home</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#FF4A00] hover:bg-[#252024] hover:text-white">About</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#FF4A00] hover:bg-[#252024] hover:text-white">Experience</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#FF4A00] hover:bg-[#252024] hover:text-white">Projects</a>            
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#FF4A00] hover:bg-[#252024] hover:text-white">Contact</a>            
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#FF4A00] hover:bg-[#252024] hover:text-white">Skills</a>                    
        </div>
    </div>
);
const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sm:hidden'>

            <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-[#252024] p-2 text-[#D5BAA6] hover:bg-orange-900" aria-controls="mobile-menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>

                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {isOpen ? (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}

            </button>

            {isOpen && (
                <div className='absolute right-0 top-20 space-y-2 sm:hidden bg-[#252024dc] rounded-l-md transition-all duration-300 ease'>
                    
                    <a href="#" className="block px-4 py-2 text-white " title='Home'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" ><path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" /><path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" /></svg>
                    </a>    
        
                    <a href="#" className="block px-4 py-2 text-white" title='About'>                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" /></svg>                   
                    </a>

                    <a href="#" className="block px-4 py-2 text-white" title='Experience'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" /></svg>                                            
                    </a>

                    <a href="#" className="block px-4 py-2 text-white" title='Projects'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" /><path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" /></svg>
                    </a>

                    <a href="#" className="block px-4 py-2 text-white" title='Contact'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
                    </a>

                    <a href="#" className="block px-4 py-2 text-white" title='Skills'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" /></svg>
                    </a>
                </div>
            )}

        </div>
    );
};
const Navbar = () => (
<nav className="w-full px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between">
        <Logo />
        <NavLinks />
        <MobileMenu />
    </div>
</nav>
);
export default Navbar