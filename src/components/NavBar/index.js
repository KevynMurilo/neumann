import React, { useState, useEffect, useRef } from "react";
import { AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";
import icon from "../../assets/logoNeumann.webp";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    const handleItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const whatsappNumber = '5561981789111';

    return (
        <>
            {/* MOBILE */}
            <nav className="w-full flex items-center justify-between py-2 px-4 absolute top-0 lg:hidden bg-gray-dark" style={{ zIndex: 49 }}>
                <img src={icon} alt="icon" className="w-10 h-auto" width="48" height="48" />
                <FiAlignJustify
                    className="text-white text-4xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-xl cursor-pointer"
                    onClick={toggleMenu}
                />
                {menuOpen && (
                    <div ref={menuRef} className="absolute top-0 left-0 w-full bg-gray-dark text-white py-4 shadow-lg" style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <ul className="flex flex-col items-center">
                        <li className="my-2">
                            <a href="#sobre" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>SOBRE</a>
                        </li>
                        <li className="my-2">
                            <a href="#produtos" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>PRODUTOS</a>
                        </li>
                        <li className="my-2">
                            <a href="#calculadora" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>CALCULADORA</a>
                        </li>
                        <li className="my-2">
                            <a href="#fotos" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>FOTOS</a>
                        </li>
                        <li className="my-2">
                            <a href="#perguntas" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>PERGUNTAS</a>
                        </li>
                        <div className="flex justify-around mt-6 gap-6">
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 cursor-pointer" />
                            </a>
                            <a href="https://www.instagram.com/neumannbier" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 cursor-pointer" />
                            </a>
                        </div>
                    </ul>
                    </div>
                )}
            </nav>


            {/* DESKTOP */}
            <nav className="hidden lg:flex lg: bg-gray-dark px-10 z-50">
                <div className="flex lg:items-center justify-between container mx-auto max-w-[2500px] bg-gray-dark px-10 py-5 z-50">
                    {/* Logo */}
                <div className="flex items-center">
                    <img src={icon} alt="icon" className="w-14 h-auto mr-4 object-cover" />
                </div>

                {/* Menu */}
                <div>
                    <ul className="flex justify-center space-x-10">
                        <li className="cursor-pointer text-lg hover:text-gold">
                            <a href="#sobre" className="text-white text-lg hover:text-gold">SOBRE</a>
                        </li>
                        <li className="cursor-pointer text-lg hover:text-gold">
                            <a href="#produtos" className="text-white text-lg hover:text-gold">PRODUTOS</a>
                        </li>
                        <li className="cursor-pointer text-lg hover:text-gold">
                            <a href="#calculadora" className="text-white text-lg hover:text-gold">CALCULADORA</a>
                        </li>
                        <li className="cursor-pointer text-lg hover:text-gold">
                            <a href="#fotos" className="text-white text-lg hover:text-gold">FOTOS</a>
                        </li>
                        <li className="cursor-pointer text-lg hover:text-gold">
                            <a href="#perguntas" className="text-white text-lg hover:text-gold">PERGUNTAS</a>
                        </li>
                    </ul>
                </div>

                {/* Ícones */}
                <div className="flex items-center gap-2">
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        <AiOutlineWhatsApp className="text-4xl mx-2 lg:mx-4 cursor-pointer text-white" />
                    </a>

                    <a href="https://www.instagram.com/neumannbier" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram className="text-4xl mx-2 lg:mx-4 cursor-pointer text-white" />
                    </a>
                </div>
                </div>
            </nav>
        </>
    );
}

export default React.memo(NavBar);