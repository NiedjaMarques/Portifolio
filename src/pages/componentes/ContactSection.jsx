import React from 'react'
import { useState } from 'react'
import emailJs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub } from "react-icons/fa6";
import iconLinkedin from '../../../app/view/icons/icons8-linkedin.svg'
import iconEmail from '../../../app/view/icons/icons8-email.svg'
import iconGithub from '../../../app/view/icons/icons8-github.svg'

const Contact = () => {
    return (
        <>
            <footer className="grid sm:grid-cols-2 gap-4 items-center pb-10 pt-4 transition-all duration-500 ease " id='contact'>               

                <div>

                    <h1 className="font-bold text-3xl sm:text-4xl mb-5 transition-all duration-500 ease">
                        <span className='text-verde'>04.</span>Contato
                    </h1>
                    
                    <ContactForm />
                </div>

                <div className='py-4'>

                    <div className="flex items-center mb-2">
                        <img className='transform duration-500 rounded-full h-10' src={iconLinkedin} alt="logo linkedin" />
                        <a href="https://www.linkedin.com/in/niedja-marques-460823274/" target="_blank" className='font-medium hover:underline hover:text-verde duration-300 transition-all ease'>/niedja-marques</a>
                    </div>

                    <a className="flex items-center mb-2">
                        {/* <img className='transform duration-500 rounded-full h-10' src={FaGithub} alt="logo Github"/> */}<FaGithub className=' text-[#84E296] text-3xl mr-2'/>
                        <a href="https://github.com/NiedjaMarques" target="_blank" className='font-medium hover:underline hover:text-verde duration-300 transition-all ease'>/NiedjaMarques</a>
                    </a>

                    <div className="flex items-center">
                        <img className='transform duration-500 rounded-full h-10 p-1' src={iconEmail} alt="logo email" />
                        <a href="mailto:niedja.marquees@gmail.com" target="_blank" className='font-medium hover:underline hover:text-verde duration-300 transition-all ease'>niedja.marquees@gmail.com</a>
                    </div>

                    <p className='pt-5 max-w-sm text-sm'>
                        Gostaria de saber mais sobre meus projetos ou tem alguma oportunidade para mim? <br /><br />Sinta-se à vontade para entrar em contato através do formulário ou pelo meu e-mail. Responderei o mais breve possível!
                    </p>

                </div>  

            </footer>

            <p className='p-5 text-center text-xs'>
                © 2024 / Niedja Marques / Todos os direitos reservados
            </p>
        </>
    )
 }

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    function sendEmail(e) {
        e.preventDefault()

        if (name === '' || email === '' || assunto === '' || mensagem === '') {
            toast.warn("Preencha todos os campos! ⚠️", {
                position: "bottom-left"
            });
            return;
        }

        const templateParams = {
            from_name: name,
            from_assunto: assunto,
            message: mensagem,
            email: email
        }

        emailJs.send("service_rtyts2v", "template_3g90h09", templateParams, "c9ytHd_td05mniWX6")
        .then(() => {
            toast.success("Email enviado com sucesso! 🎉",{
                position: "bottom-left"
            });
            setName('')
            setEmail('')
            setMensagem('')
            setAssunto('')
        }, () => {
            toast.error("Erro ao enviar o email. 😞 Por favor, tente outras formas de contato.", {
                position: "bottom-left"
            });
            return;
        })
    }

    return (
        <>
            <div className='transition-all duration-500 ease'>

                <form onSubmit={sendEmail} className="form max-w-md mt-5 p-4 border rounded-lg shadow-sm text-black">

                    <input
                    type="text"
                    placeholder="Digite seu nome"
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />

                    <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />

                    <input
                    type="text"
                    placeholder="Digite o assunto"
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none"
                    onChange={(e) => setAssunto(e.target.value)}
                    value={assunto}
                    />

                    <textarea
                    placeholder="Sua mensagem..."
                    className="w-full p-2 mb-4 border rounded-lg h-32 resize-none focus:outline-none"
                    onChange={(e) => setMensagem(e.target.value)}
                    value={mensagem}
                    ></textarea>
                    
                    <button
                    type="submit"
                    className="w-full p-2 bg-verde font-bold rounded-lg hover:bg-azul-claro transition-all duration-500 ease focus:outline-none focus:ring-2">
                    Enviar
                    </button>

                </form>
                <ToastContainer />
            </div>
        </>      
    );
};
 export default Contact