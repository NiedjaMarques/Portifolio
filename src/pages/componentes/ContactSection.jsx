import React from 'react'
import { useState } from 'react'
import emailJs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import iconLinkedin from '../../../app/view/icons/icons8-linkedin.svg'
import iconEmail from '../../../app/view/icons/icons8-email.svg'
import iconGithub from '../../../app/view/icons/icons8-github.svg'

const Contact = () => {
    return (
        <>
            <footer className="container mx-auto px-4 pb-10" id='contact'>               

                <div className="flex flex-col items-center justify-around md:flex-row transition-all duration-500 ease">

                    <div className=''>

                        <h1 className="text-3xl sm:text-4xl font-bold text-start transition-all duration-500 ease">
                            <span className='text-verde'>04.</span>Contato
                        </h1>

                        <ContactForm />

                    </div>

                    <div className='flex flex-col sm:justify-start py-4 md:[40%]'>

                        <a href="https://www.linkedin.com/in/niedja-marques-460823274/" target="_blank" className="my-2 flex items-center">
                            <img className='transform duration-500 mx-2 rounded-full h-10' src={iconLinkedin} alt="logo linkedin" />
                            <p className='font-medium'>/niedja-marques</p>
                        </a>

                        <a href="https://github.com/NiedjaMarques" target="_blank" className="my-2 flex items-center">
                            <img className='transform duration-500 mx-2 rounded-full h-10' src={iconGithub} alt="logo Github" />
                            <p className='font-medium'>/NiedjaMarques</p>
                        </a>

                        <a href="mailto:niedja.marquees@gmail.com" target="_blank" className="my-2 flex items-center">
                            <img className='transform duration-500 mx-2 rounded-full h-10 p-1' src={iconEmail} alt="logo email" />
                            <p className='font-medium'>niedja.marquees@gmail.com</p>
                        </a>

                    </div>                    

                </div>                

            </footer>
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

                <form onSubmit={sendEmail} className="form max-w-md mt-8 p-4 border rounded-lg shadow-sm text-black">

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
                    className="w-full p-2 bg-rosa rounded-lg hover:bg-azul-claro focus:outline-none focus:ring-2">
                    Enviar
                    </button>

                </form>
                <ToastContainer />
            </div>
        </>      
    );
};
 export default Contact