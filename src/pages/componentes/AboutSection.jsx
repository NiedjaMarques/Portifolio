import imgEu from '../../../app/view/imagens/oculosretangulo.jpg'
function About(){
    return(
        <>
            <section className="py-10 bg-azul-escuro">

                <div className="container px-4 mx-auto flex flex-col items-center justify-center sm:flex-row transition-all duration-500 ease">

                    <div className='pb-5 max-w-[45%] md:w-[40%] sm:mr-4 transition-all duration-500 ease'>
                        <img className='rounded-full shadow-lg shadow-cinza-claro' src={imgEu} alt="Niedja Marques" />
                    </div>

                    <div className="pb-5 text-cinza-claro text-center sm:text-start sm:ml-4 sm:w-1/2 transition-all duration-500 ease">

                        <h1 className="text-3xl sm:text-4xl font-bold transition-all duration-500 ease">
                            Sobre mim
                        </h1>

                        <p className="py-5 font-medium">
                            Olá! Meu nome é Niedja Marques e sou desenvolvedora web em transição de carreira. Deixei a área financeira para seguir minha paixão pela criação de sites e sistemas. Sempre busco aprimorar minhas habilidades tanto em front-end quanto em back-end. Estou constantemente em busca de aprendizado contínuo, seja através de cursos online, workshops ou projetos pessoais. Durante minha jornada, me dediquei e criei diversos projetos, sempre buscando aprender e me aprimorar. Esses projetos me ajudaram a fortalecer minhas habilidades e a consolidar meu conhecimento em desenvolvimento web.

                            {/* Desenvolvedora web em transição de carreira, com experiência sólida em HTML, 
                            CSS, JavaScript e Tailwind CSS para o desenvolvimento de interfaces intuitivas.
                            No back-end, tenho habilidades em PHP, Programação Orientada a Objetos (POO), 
                            Model-View-Controller (MVC) e gerenciamento de bancos de dados MySQL. 
                            Sou detalhista e focada em resolução de problemas, com experiência em 
                            desenvolvimento de aplicativos web. Estou comprometida em aprimorar minhas 
                            competências e contribuir para projetos desafiadores, criando soluções robustas
                            e eficientes. */}
                        </p>
                    </div>                   

                </div>
                               
            </section>
        </>       
    )
}
export default About