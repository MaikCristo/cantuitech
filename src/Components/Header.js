import cantu from "../imagem/cantuitech.png";
import '../App.css';
import logo2B from "../imagem/logo2B.png";
import logo2P from "../imagem/logo2P.png";


import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from "react-bootstrap";

import {useEffect, useState} from "react";
import Menu from "./Menu";
import {useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';


    const [headerFixed, setHeaderFixed] = useState(false);
    const [logoImage, setLogoImage] = useState(logo2B);
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 270) { // Defina o valor de deslocamento após o qual o header ficará fixo (por exemplo, 100px)
                setHeaderFixed(true);
                setLogoImage(logo2P);
            } else {
                setHeaderFixed(false);
                setLogoImage(logo2B);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`header ${headerFixed ? 'fixed' : ''} ${isHomePage ? 'transparent' : 'white'}`}>
            {isHomePage ? ( <div className="px-5"><img src={logoImage} className="App-logo" alt="logo" /></div>
                ) : (
                    <div className="px-5"><img src={logo2P} className="App-logo" alt="logo" /></div>
                )}

                <div className="p-5 ms-auto"></div>

            <div className="px-5"><Menu/></div>
        </header>
    );
};
export default Header;