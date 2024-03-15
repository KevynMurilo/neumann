import React, { useEffect } from "react";
import "./scrollReveal.css";
import ScrollReveal from "scrollreveal";

import textura from "../../assets/textura.webp";
import photoAbout from "../../assets/imageabout.webp";

const About = () => {
    useEffect(() => {
        const sr = ScrollReveal({ reset: true });
        sr.reveal('.imageAbout', { duration: 2000, origin: 'left', distance: '150px'});
        sr.reveal('.textAbout', { duration: 2000, origin: 'right', distance: '150px'});
    }, []);

    return (
        <section id="sobre" className="lg:w-full h-full justify-center items-center overflow-hidden" style={{backgroundImage: `url(${textura})`, backgroundPosition: 'center', backgroundRepeat: 'repeat'}}>
            <div className="flex flex-col lg:flex lg:flex-row w-full h-full py-14 lg:px-28 lg:py-44 justify-center items-center container mx-auto max-w-[2500px]" style={{backgroundImage: `url(${textura})`, backgroundPosition: 'center', backgroundRepeat: 'repeat'}}>
                <div className="imageAbout flex lg:w-1/2 justify-center items-center">
                    <img src={photoAbout} alt="about" className="w-5/6 h-54 lg:w-2/3 lg:h-54 sr imageAbout"/>
                </div>

                <div className="mt-10 flex flex-col lg:w-1/2 justify-center items-center lg:mt-0 sr textAbout">
                    <div className="textAbout px-5 text-white lg:px-0">
                        <h1 className="text-2xl lg:text-4xl 2xl:text-5xl  font-bold">
                            CERVEJARIA LÍDER EM CERVEJA, DESDE XXXX!
                        </h1>

                        <p className="mt-5 text-lg 2xl:text-xl xl:mt-10 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        <br/><br/>

                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        <br/><br/>

                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(About);
