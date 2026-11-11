import React from 'react'
import { useState } from 'react'
import emailJs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";

//porque esse id do contact

const Contact = () => {
    return ( 
        <>
            <footer className="py-8 grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 transition-all duration-500 ease" id='contact'>               

                <div className="pb-4 sm:pb-0 transition-all duration-500 ease">

                    <h2 className="flex items-center gap-2 text-xl text-verde font-bold mb-4">
                    <span className="w-7 h-[1px] bg-verde"></span>
                        Contato
                    </h2>
                    
                    <ContactForm />
                </div>

                <div className='flex flex-col justify-center py-4'>

                    <div className="flex items-center mb-2">
                        <FaLinkedin className='text-verde text-3xl mr-2'/>
                        <a href="https://www.linkedin.com/in/niedja-marques-460823274/" target="_blank" className='font-medium hover:underline '>/niedja-marques</a>
                    </div>

                    <div className="flex items-center mb-2">
                        <FaGithub className='text-verde text-3xl mr-2'/>
                        <a href="https://github.com/NiedjaMarques" target="_blank" className='font-medium hover:underline'>/NiedjaMarques</a>
                    </div>

                    <div className="flex items-center">
                        <FaEnvelope className='text-verde text-3xl mr-2'/>
                        <a href="mailto:niedjamarquesarruda@gmail.com" target="_blank" className='font-medium hover:underline'>niedjamarquesarruda@gmail.com</a>
                    </div>

                    <p className='pt-5 max-w-sm text-sm'>
                        Está buscando uma profissional para sua equipe ou deseja conhecer melhor meus projetos? <br /><br />Estou aberta a oportunidades nas áreas de Desenvolvimento, Suporte Técnico e Automação. Entre em contato pelo formulário ou pelos canais abaixo. Será um prazer conversar!
                    </p>

                </div>  

            </footer>

            <p className='p-5 text-center text-xs'>
                © 2024 | Niedja Marques / Todos os direitos reservados
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
                    className="w-full p-2 bg-verde font-bold rounded-lg hover:bg-branco transition-all duration-500 ease focus:outline-none focus:ring-2">
                    Enviar
                    </button>

                </form>
                <ToastContainer />
            </div>
        </>      
    );
};
 export default Contact