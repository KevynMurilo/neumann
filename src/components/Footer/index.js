import React from 'react';
import textura from "../../assets/textura.webp"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-8 text-center w-full h-auto" style={{backgroundImage: `url(${textura})`, backgroundPosition: 'center', backgroundRepeat: 'repeat'}}>
      <div className="md:flex justify-start items-center">
        <p className="md:text-left">&copy; {new Date().getFullYear()} Cervejaria Neumannbier. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;