import React from "react";
import background from "../../assets/fundoHeader.webp";
import logo from "../../assets/logo.webp";

const Header = () => {
    return (
        <header className="bg-cover bg-center flex items-center justify-center w-[100%] h-[500px] lg:h-[800px] object-cover" style={{backgroundImage: `url(${background})`}}>
            <img src={logo} alt="icon" className="w-56 h-56 lg:w-96 lg:h-96 pointer-events-none"/>
        </header>
    );
}

export default React.memo(Header);
