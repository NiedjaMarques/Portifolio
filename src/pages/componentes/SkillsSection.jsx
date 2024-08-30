import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiVitess } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
    return(
        <>
            <section className="py-10" id='skills'>

                <h1 className="font-bold text-3xl sm:text-4xl mb-5 transition-all duration-500 ease">
                    <span className='text-verde'>04.</span>Skills
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                    <div className="flex flex-col items-center text-center text-cinza-claro p-6 bg-azul-escuro rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border">

                        <SiMysql className="text-[100px] transform hover:scale-110 transition-transform duration-300 text-verde"/>

                        <h3 className="text-xl font-semibold">
                            MySQL
                        </h3>

                        <p className="text-sm mt-2">
                            O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.
                        </p>

                    </div>
                    
                    <div className="flex flex-col items-center justify-center text-center text-cinza-claro p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border">

                        <div className="flex pb-5 items-center justify-center space-x-4 transform hover:scale-110 transition-transform duration-300 text-verde text-[50px]">
                            <FaHtml5 className=""/>
                            <IoLogoJavascript className="mt-10"/>
                            <FaCss3Alt className=""/>
                        </div>

                        <h3 className="text-xl font-semibold">
                            HTML, CSS e JS
                        </h3>

                        <p className="text-sm mt-2">
                            HTML, CSS e Javascript, também conhecidas como santíssima trindade da web, formam o principal conjunto de tecnologias para qualquer aplicação web. Já deu para ver que é de suma importância entender MUITO bem esses caras.
                        </p>

                    </div>

                    <div className="flex flex-col items-center text-center p-6 text-cinza-claro bg-azul-escuro rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border">

                        <FaReact className="text-[100px] transform hover:scale-110 transition-transform duration-300 text-verde"/>

                        <h3 className="text-xl font-semibold mt-5">
                            React JS
                        </h3>

                        <p className="text-sm mt-5">
                            O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.
                        </p>

                    </div>

                    <div className="flex flex-col items-center text-center text-cinza-claro p-6 bg-azul-escuro rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border">

                        <SiTailwindcss className="text-[100px] transform hover:scale-110 transition-transform duration-300 text-verde"/>

                        <h3 className="text-xl font-semibold">
                            Tailwind Css
                        </h3>

                        <p className="text-sm mt-2">
                            Tailwind CSS é um framework de CSS que se destaca por sua abordagem utilitária. Ao invés de oferecer componentes pré-construídos, ele promove o uso de classes CSS individuais para estilizar elementos diretamente no HTML. Isso proporciona uma personalização flexível e eficiente das interfaces de usuário.
                        </p>

                    </div>

                    <div className="flex flex-col items-center text-center p-6 text-cinza-claro bg-azul-escuro rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border">

                        <FaPhp className="text-[100px] transform hover:scale-110 transition-transform duration-300 text-verde"/>

                        <h3 className="text-xl font-semibold">
                            PHP
                        </h3>

                        <p className="text-sm mt-2">
                            PHP é uma linguagem de programação especialmente conhecida por sua capacidade de processar formulários web, interagir com bancos de dados e criar páginas dinâmicas. PHP é executado no servidor e é uma escolha popular para desenvolvedores pela sua simplicidade e eficiência no desenvolvimento de aplicações web dinâmicas.
                        </p>

                    </div>

                    <div className="flex flex-col items-center text-center p-6 text-cinza-claro bg-azul-escuro rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border">

                        <FaGithub className="text-[100px] transform hover:scale-110 transition-transform duration-300 text-verde"/>

                        <h3 className="text-xl font-semibold mt-4">
                            Github
                        </h3>

                        <p className="text-sm mt-2">
                            GitHub é uma plataforma de hospedagem de código-fonte baseada em Git. Permite que desenvolvedores hospedem seus projetos, colaborem com outros desenvolvedores, revisem código, gerenciem versões e acompanhem mudanças no código ao longo do tempo. 
                        </p>

                    </div>

                    <div className="flex flex-col items-center text-center p-6 text-cinza-claro bg-azul-escuro rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border">

                        <FaNodeJs className="text-[100px] transform hover:scale-110 transition-transform duration-300 text-verde"/>

                        <h3 className="text-xl font-semibold mt-4">
                            Node.js
                        </h3>

                        <p className="text-sm mt-2">
                            Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
                        </p>

                    </div>

                    <div className="flex flex-col items-center text-center p-6 text-cinza-claro bg-azul-escuro rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border">

                        <SiVitess className="text-[100px] transform hover:scale-110 transition-transform duration-300 text-verde"/>

                        <h3 className="text-xl font-semibold mt-4">
                            Vite
                        </h3>

                        <p className="text-sm mt-2">
                            Vite é uma ferramenta de build front-end que oferece um ambiente de desenvolvimento ultra-rápido para projetos JavaScript modernos, como React e Vue, utilizando ES Modules e uma compilação eficiente. 
                        </p>

                    </div>

                </div>

            </section>
        </>
    )
}
export default Skills