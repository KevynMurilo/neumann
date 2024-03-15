import React, { useState, useEffect, memo } from 'react';
import textura from "../../assets/textura.webp";
import throttle from 'lodash/throttle';

const images = [
    require("../../assets/foto1.webp"),
    require("../../assets/foto2.webp"),
    require("../../assets/foto3.webp"),
    require("../../assets/foto4.webp"),
    require("../../assets/foto5.webp"),
    require("../../assets/foto1.webp"),
    require("../../assets/foto2.webp"),
    require("../../assets/foto3.webp"),
    require("../../assets/foto4.webp"),
    require("../../assets/foto5.webp"),
    require("../../assets/foto1.webp"),
    require("../../assets/foto2.webp"),
    require("../../assets/foto3.webp"),
    require("../../assets/foto4.webp"),
    require("../../assets/foto5.webp"),
    require("../../assets/foto1.webp"),
    require("../../assets/foto2.webp"),
    require("../../assets/foto3.webp"),
    require("../../assets/foto4.webp"),
    require("../../assets/foto5.webp"),
];

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsMobile(window.innerWidth < 768);
    }, 200);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const initialLoadCount = isMobile ? 3 : 6;
    setLoadedImages(images.slice(0, initialLoadCount));
    setLoadedCount(initialLoadCount);
  }, [isMobile]);

  const loadMoreImages = () => {
    const increment = isMobile ? 3 : 6;
    const newLoadedCount = loadedCount + increment;
    setLoadedImages([...loadedImages, ...images.slice(loadedCount, newLoadedCount)]);
    setLoadedCount(newLoadedCount);
  };

  return (
    <section id='fotos' className="flex py-10 w-full h-full" style={{backgroundImage: `url(${textura})`, backgroundPosition: 'center', backgroundRepeat: 'repeat'}}>
      <div className='container mx-auto max-w-[2500px] px-5 lg:px-28'>
        <div className={`grid ${isMobile ? '' : 'grid-cols-3'} gap-4`}>
        {loadedImages.map((image, index) => {
            return (
              <div key={index} className={`${isMobile ? '' : 'overflow-hidden'}`}>
                <img src={image} alt={`Imagem ${index + 1}`} className={`${isMobile ? 'w-full' : 'w-full h-full object-cover'}`}/>
              </div>
            );
          })}
        </div>
        {loadedCount < images.length ? (
          <div className="mt-4 flex justify-center">
            <button onClick={loadMoreImages} className="bg-white text-black w-44 h-22 py-6 mt-10 px-4 rounded-md shadow-2xl text-center transition duration-300 ease-in-out hover:scale-110">
              Mostrar mais
            </button>
          </div>
        ) : (
          <div className={`mt-10 flex justify-center items-center mx-auto border-2 ${isMobile ? 'w-full' : 'w-96'} px-4 py-2 text-sm text-white text-center`}>
            TODAS AS IMAGENS FORAM CARREGADAS
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Gallery);
