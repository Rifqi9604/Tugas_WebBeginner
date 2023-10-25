import React, { useState, useEffect } from "react";
import { SocmedLogo } from "../../components/SocmedLogo/SocmedLogo";
import chara from "./chara.png";
import arrow from "./down-arrow.png";
import { TypingText } from "../../components/TypingText/TypingText";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export const LandingPage = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    useEffect(() => {
        // Menggulirkan halaman secara halus ke elemen dengan ID "main"
        const scrollArrow = document.getElementById("scroll-arrow");
        scrollArrow.addEventListener("click", () => {
            const mainElement = document.getElementById("main");
            if (mainElement) {
                mainElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }, []);

    return(     
        <div className={` ${darkTheme ? 'dark' : ''} dark:text-[white] dark:bg-[#004052 scroll-smooth]`}>
        <div className="h-screen relative text-[#00536a] bg-[#f2f2f2] dark:text-[#fca311] dark:bg-[#14213d]">
            <div className="fixed top-0 right-0 p-4">
            <button onClick={toggleTheme} className="font-semibold bg-[#00536a] rounded-full text-white py-3 px-4 hover:bg-[#d9d9d9] hover:text-[#00536a] border-transparent border-4 hover:border-[#00536a] dark:text-[#14213d] dark:bg-[#fca311] dark:hover:bg-[#14213d] dark:hover:text-[#fca311] dark:border-transparent dark:border-4 dark:hover:border-[#fca311] dark:font-semibold hover:font-semibold dark:hover:font-semibold">Change</button>

            </div>
            <div className="h-screen -my-8 flex flex-col-reverse justify-center items-center">
                <div>
                    <TypingText/>
                </div>
            </div>
            <div className="text-center -my-40 flex flex-col justify-center items-center font-semibold text-[20px] pb-12">
                Scroll to continue
                <a href="#main" id="scroll-arrow">
                    <img src={arrow} className="h-[48px] w-[48px] dark:text-[#fca311]" />
                </a>
            </div>
        </div>
        
        <div id="main" className="flex flex-col-reverse md:flex-row h-screen bg-[#f2f2f2] text-[#00536a] dark:text-[#fca311] dark:bg-[#14213d]">
            {/* Hero Section (tinggi satu layar penuh) */}
                <div data-aos="fade-right" data-aos-delay="400" className="flex flex-col justify-center w-full md:w-1/2 px-16 pb-56 md:pb-0">
                        <div className="text-justify justify-start ">
                            <h1 className="text-[32px]">
                                HEY! <span className="font-bold">I'm Adelia Deswita</span>, A <span className="font-bold">SOPHOMORE </span> AT UPN VETERAN JAKARTA
                            </h1>
                            <p>Dengan ini saya, Adelia Deswita dari S1-Sistem Informasi 2022 dengan NIM 2210512(...) telah menyelesaikan Tugas 1 Study Club Web Beginner</p>
                        </div>
                        <SocmedLogo/>
                </div>

                <div data-aos="fade-left" data-aos-delay="400" className="w-full md:w-1/2 flex justify-center items-center">
                    <img src={chara} className="w-[70%] h-[70%] md:w-[75%] md:h-[75%] lg:w-[75%] lg:h-[75%]"/>
                </div>
            </div>
        </div>
    )
}