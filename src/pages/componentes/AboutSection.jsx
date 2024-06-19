import imgEu from '../../../app/view/imagens/oculosretangulo.jpg'
function About(){
    return(
        <>
            <section className="py-10 bg-azul-escuro">

                <div className="container px-4 mx-auto flex flex-col items-center justify-center sm:flex-row transition-all duration-500 ease">

                    <div className='pb-5 max-w-[45%] md:w-[40%] sm:mr-4 transition-all duration-500 ease'>
                        <img className='rounded-3xl shadow-sm shadow-cinza-claro' src={imgEu} alt="Niedja Marques" />
                    </div>

                    <div className="pb-5 text-cinza-claro text-center sm:text-start sm:ml-4 sm:w-1/2 transition-all duration-500 ease leading-relaxed">

                        <h1 className="text-3xl sm:text-4xl font-bold transition-all duration-500 ease">
                            Sobre mim
                        </h1>

                        <p className="py-2 font-medium">
                            Olá! Meu nome é Niedja Marques, uma desenvolvedora web em transição de carreira. Estou sempre buscando aprimorar minhas habilidades tanto em front-end quanto em back-end. Tenho experiência sólida em HTML, CSS, JavaScript, React JS e Tailwind CSS para desenvolver interfaces intuitivas e responsivas.
                        </p>

                        <p className='py-2 font-medium'>
                            No back-end, possuo habilidades em PHP, Programação Orientada a Objetos (POO) e aplicação do padrão Model-View-Controller (MVC) para otimização de desempenho, além do gerenciamento de bancos de dados MySQL.
                        </p>
                                                
                    </div>                   

                </div>
                               
            </section>
        </>       
    )
}
export default About