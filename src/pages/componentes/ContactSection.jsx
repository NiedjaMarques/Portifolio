import iconLinkedin from '../../../app/view/icons/icons8-linkedin.svg'
import iconEmail from '../../../app/view/icons/icons8-email.svg'
import iconGithub from '../../../app/view/icons/icons8-github.svg'

const Contact = () => {
    return (
        <>
            <div className="bg-[#252024] pt-20 ">
                <div className="text-[#D5BAA6]">
                    <h1 className="text-3xl sm:text-4xl font-bold p-4 text-start">
                        {/*  text-[#D5BAA6]   bg-[#562300] */}
                        Contato
                    </h1>

                    <div className='flex flex-col sm:justify-start py-4'>
                        <a href="https://www.linkedin.com/in/niedja-marques-460823274/" target="_blank" className="my-2 flex items-center">
                            <img className='bg-[#ff4800] transform duration-500 hover:bg-[#ff4800d2] mx-2 rounded-full shadow-lg shadow-[#ff48004b] h-10' src={iconLinkedin} alt="logo linkedin" />
                            <p>/niedja-marques</p>
                        </a>

                        <a href="https://github.com/NiedjaMarques" target="_blank" className="my-2 flex items-center">
                            <img className='bg-[#ff4800] transform duration-500 hover:bg-[#ff4800d2] mx-2 rounded-full shadow-lg shadow-[#ff48004b] h-10' src={iconGithub} alt="logo Github" />
                            <p>/NiedjaMarques</p>
                        </a>

                        <a href="mailto:niedja.marquees@gmail.com" target="_blank" className="my-2 flex items-center">
                            <img className='bg-[#ff4800] transform duration-500 hover:bg-[#ff4800d2] mx-2 rounded-full shadow-lg shadow-[#ff48004b] h-10 p-1' src={iconEmail} alt="logo email" />
                            <p>niedja.marquees@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
 }
 export default Contact