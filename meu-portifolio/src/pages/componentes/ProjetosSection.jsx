import React, { useState, useEffect } from 'react';

const Projetos = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
    {
        image: "../../../app/view/imagens/fundolaranja.jpg",
        title: "Sistema de Autenticação",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus neque aliquam voluptatum consequatur pariatur soluta excepturi fuga perferendis, odio, maiores voluptatibus sequi enim asperiores maxime accusamus, non id vel hic."
    },
    {
        image: "../../../app/view/imagens/imgfundoazul.jpg",
        title: "Sistema de Autenticação",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus neque aliquam voluptatum consequatur pariatur soluta excepturi fuga perferendis, odio, maiores voluptatibus sequi enim asperiores maxime accusamus, non id vel hic."
    },
    {
        image: "../../../app/view/imagens/oculosredondo.jpg",
        title: "teste Sistema de Autenticação",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus neque aliquam voluptatum consequatur pariatur soluta excepturi fuga perferendis, odio, maiores voluptatibus sequi enim asperiores maxime accusamus, non id vel hic."
    }
    ];

    const Prev = () => {
        setCurrentSlide((prev) => (prev === 0? slides.length - 1 : prev - 1));
    };

    const Next = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            Next();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative my-20">

            <div className="relative h-56 overflow-hidden rounded-lg sm:h-96 flex items-center justify-center sm:mx-20 lg:mx-28">

                {slides.map((slide, index) => (

                    <div key={index} className={`absolute duration-700 ease-in-out w-full sm:w-2/3 md:w-2/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${currentSlide === index? 'block' : 'hidden'}`}>

                        <img src={slide.image} className="block h-full object-cover w-full" alt={`Slide ${index + 1}`}/>

                        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">

                            <h3 className="text-lg">
                                {currentSlide === index && slide.title}
                            </h3>

                            <p>
                                {currentSlide === index && slide.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">

              {slides.map((_, index) => (

                <button key={index} type="button" className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#252024]' : 'bg-[#D5BAA6]'}`} aria-current= {currentSlide === index} aria-label={`Slide $ {index + 1}`} onClick={() => goToSlide(index)}>
                </button>

                ))}

            </div>

            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={Prev} data-carousel-prev>

                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">

                    <svg className="w-4 h-4 text-white  dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path  stroke="currentColor" strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/></svg>
                    
                </span>

            </button>

            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={Next} data-carousel-next>

                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">

                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/></svg>
                </span>
                
            </button>
            
        </div>
    );
};

export default Projetos;


//     return (
//         <div className="relative my-20 bg-green-600 rounded-full">

//             <div className="relative h-56 overflow-hidden rounded-lg sm:h-96 flex items-center justify-center sm:mx-20 lg:mx-28">

//                 {slides.map((slide, index) => (

//                     <div key={index} className={`bg-red-400 absolute duration-700 ease-in-out w-full sm:w-2/3 md:w-2/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${currentSlide === index ? 'block' : 'hidden'}`}>

//                         <img src={slide.image} className=" block h-full object-cover w-full" alt={`Slide ${index + 1}`} />

//                         <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
//                         <h3 className="text-lg">{slide.title}</h3>
//                         <p>{slide.description}</p>
//                         </div>

//                     </div>

//                 ))}

//             </div>

//             <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">

//                 {slides.map((_, index) => (

//                 <button key={index} type="button" className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#252024]' : 'bg-[#D5BAA6]'}`} aria-current= {currentSlide === index} aria-label={`Slide $ {index + 1}`} onClick={() => goToSlide(index)}>
//                 </button>

//                 ))}

//             </div>

//             <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={Prev} data-carousel-prev>

//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">

//                     <svg className="w-4 h-4 text-white  dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path  stroke="currentColor" strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/></svg>
                    
//                 </span>

//             </button>

//             <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={Next} data-carousel-next>

//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">

//                     <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/></svg>
//                 </span>
                
//             </button>

//             <div>
//                 <h1>

//                 </h1>

//                 <p>

//                 </p>

//                 <p>

//                 </p>
//             </div>
//         </div>
//     );
// };
// export default Projetos;