import iconLinkedin from '../../../app/view/icons/icons8-linkedin.svg'
import iconEmail from '../../../app/view/icons/icons8-email.svg'
import iconGithub from '../../../app/view/icons/icons8-github.svg'

const Contact = () => {
    return (
        <>
            <footer className="bg-azul-escuro py-10">               

                <div className="container mx-auto px-4 flex flex-col items-center sm:justify-around md:flex-row transition-all duration-500 ease">

                    <div className='px11'>

                        <h1 className="text-3xl sm:text-4xl font-bold md:text-start text-center transition-all duration-500 ease text-cinza-claro">
                            Contato
                        </h1>

                        <ContactForm />

                    </div>

                    <div className='flex flex-col sm:justify-start py-4 md:[40%]'>

                        <a href="https://www.linkedin.com/in/niedja-marques-460823274/" target="_blank" className="my-2 flex items-center">
                            <img className='bg-laranja-coral transform duration-500 mx-2 rounded-full font shadow-sm shadow-cinza-claro h-10' src={iconLinkedin} alt="logo linkedin" />
                            <p className='font-medium text-cinza-claro'>/niedja-marques</p>
                        </a>

                        <a href="https://github.com/NiedjaMarques" target="_blank" className="my-2 flex items-center">
                            <img className='bg-laranja-coral transform duration-500 mx-2 rounded-full font shadow-sm shadow-cinza-claro h-10' src={iconGithub} alt="logo Github" />
                            <p className='font-medium text-cinza-claro'>/NiedjaMarques</p>
                        </a>

                        <a href="mailto:niedja.marquees@gmail.com" target="_blank" className="my-2 flex items-center">
                            <img className='bg-laranja-coral transform duration-500 mx-2 rounded-full font shadow-sm shadow-cinza-claro h-10 p-1' src={iconEmail} alt="logo email" />
                            <p className='font-medium text-cinza-claro'>niedja.marquees@gmail.com</p>
                        </a>

                    </div>                    

                </div>                

            </footer>
        </>
    )
 }

 const ContactForm = () => {
    return (
        <>
            <div className='md:[40%] transition-all duration-500 ease'>

                <form className="max-w-md mt-8 p-4 border border-cinza-claro rounded-lg shadow-sm shadow-cinza-claro">

                    <input
                    type="text"
                    placeholder="Digite seu nome e sobrenome"
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-azul-claro"
                    />
                    <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-azul-claro"
                    />
                    <input
                    type="text"
                    placeholder="Digite o assunto"
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-azul-claro"
                    />
                    <textarea
                    placeholder="Sua mensagem..."
                    className="w-full p-2 mb-4 border rounded-lg h-32 resize-none focus:outline-none focus:border-azul-claro"
                    ></textarea>
                    
                    <button
                    type="submit"
                    className="w-full p-2 bg-laranja-coral text-white rounded-lg hover:bg-azul-claro focus:outline-none focus:ring-2 focus:ring-azul-claro focus:ring-opacity-50"
                    >
                    Enviar
                    </button>

                </form>

            </div>
        </>      
    );
};
 export default Contact