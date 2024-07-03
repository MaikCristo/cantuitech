import '../App.css';
import React, { useState } from 'react';
import logo2B from "../imagem/logo2B.png";


import {Container, Nav} from "react-bootstrap";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import {FaCopyright} from "react-icons/fa";

const Footer = () => {
    return (
           <footer className="footer no-border">

               <div className="cardss no-border">
                   <div className="cardM no-border bg-transparent text-white">
                       <p>Missão</p>
                       <p>Projetos</p>
                       <p>Banco de ideias</p>
                       <p>Faça parte</p>

                   </div>

                   <div className="cardM no-border bg-transparent">

                   </div>

                   <div className="cardMi no-border bg-transparent">
                       <img src={logo2B} className="App-logo" alt="logo" />
                   </div>
               </div>
               <div className="cardFInal">
                   <hr/>
                   <p>São Francisco - Laranjeiras do Sul-PR</p>
                   <p><FaCopyright/> Todos os direitos reservados</p>
               </div>
            </footer>

    );
};

export default Footer;