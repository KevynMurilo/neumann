import React, { useEffect } from "react";
import "./scrollReveal.css";
import ScrollReveal from "scrollreveal";

import parallax from "../../assets/parallax.webp";
import chopp from "../../assets/chopp.webp";

const Products = () => {
    useEffect(() => {
        const sr = ScrollReveal({ reset: true });
        sr.reveal('.titleProduct', { duration: 2000, origin: 'bottom', distance: '50px', delay: 50 });
        sr.reveal('.product1', { duration: 2000, origin: 'bottom', distance: '50px', delay: 100 });
        sr.reveal('.product2', { duration: 2000, origin: 'bottom', distance: '50px', delay: 150 });
        sr.reveal('.product3', { duration: 2000, origin: 'bottom', distance: '50px', delay: 250 });
    }, []);

    return (
        <section id="produtos" className="flex flex-col py-10 relative" style={{ backgroundImage: `url(${parallax})`, backgroundSize: 'contain' }}>
            <div className="px-5 lg:flex flex-col lg:px-28 container mx-auto max-w-[2500px]">
                <div className="flex justify-center ">
                    <h1 className="titleProduct text-2xl lg:text-4xl 2xl:text-5xl text-center w-full px-5 lg:w-2/5 lg:text-center font-bold" style={{ color: '#282828' }}>
                        DÊ A SEUS CONVIDADOS A EXPERIÊNCIA NEUMANNBIER
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    <div className="product1 bg-gold-light rounded-lg flex flex-col items-center py-10 sr">
                        <div className="px-5 flex flex-col items-center lg:px-10 flex-grow">
                            <img src={chopp} alt="chopp" className="w-80 h-full pointer-events-none"/>
                            
                            <div className="flex flex-col pt-10">
                                <h2 className="text-xl lg:text-2xl font-bold">
                                    Lorem Ipsum
                                </h2>
                                <h3 className="text-xl lg:text-2xl" style={{ fontWeight: 400 }}>
                                    DOLOR SIT AMET
                                </h3>
                                <p className="text-lg lg:text-xl pt-5" style={{ fontWeight: 400 }}>
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center pt-20">
                            <button className="flex items-center justify-center w-44 h-22 py-6 rounded-lg border border-black shadow-2xl  text-center transition duration-300 ease-in-out hover:scale-110">
                                EU QUERO
                            </button>
                        </div>
                    </div>

                    <div className="product2 bg-gold-light rounded-lg flex flex-col items-center py-10 sr">
                        <div className="px-5 flex flex-col items-center lg:px-10 flex-grow">
                            <img src={chopp} alt="chopp" className="w-80 h-full pointer-events-none"/>
                            
                            <div className="flex flex-col pt-10">
                                <h2 className="text-xl lg:text-2xl font-bold">
                                    Lorem Ipsum
                                </h2>
                                <h3 className="text-xl lg:text-2xl" style={{ fontWeight: 400 }}>
                                    DOLOR SIT AMET
                                </h3>
                                <p className="text-lg lg:text-xl pt-5" style={{ fontWeight: 400 }}>
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center pt-20">
                            <button className="flex items-center justify-center w-44 h-22 py-6 rounded-lg border border-black shadow-2xl  text-center transition duration-300 ease-in-out hover:scale-110">
                                EU QUERO
                            </button>
                        </div>
                    </div>

                    <div className="product3 bg-gold-light rounded-lg flex flex-col items-center py-10 sr">
                        <div className="px-5 flex flex-col items-center lg:px-10 flex-grow">
                            <img src={chopp} alt="chopp" className="w-80 h-full pointer-events-none"/>

                            <div className="flex flex-col pt-10">
                                <h2 className="text-xl lg:text-2xl font-bold">
                                    Lorem Ipsum
                                </h2>
                                <h3 className="text-xl lg:text-2xl" style={{ fontWeight: 400 }}>
                                    DOLOR SIT AMET
                                </h3>
                                <p className="text-lg lg:text-xl pt-5" style={{ fontWeight: 400 }}>
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center pt-20">
                            <button className="flex items-center justify-center w-44 h-22 py-6 rounded-lg border border-black shadow-2xl  text-center transition duration-300 ease-in-out hover:scale-110">
                                EU QUERO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Products);
