import React, { useState } from 'react';
import {Link} from "react-router-dom";


import {Container, Nav} from "react-bootstrap";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';



import Offcanvas from 'react-bootstrap/Offcanvas';
import {IoAppsSharp} from "react-icons/io5";
import {FaArrowUpWideShort, FaBuildingColumns, FaHouse} from "react-icons/fa6";

const Menu = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLinkClick = () => {
        setShow(false); // Fecha a aba lateral quando um link é clicado
    };


    return (
        <div>

            <>

                <Button variant="primary $blue-400" onClick={handleShow} className="me-2" size="lg">
                    Menu <IoAppsSharp/>
                </Button>
                <Offcanvas className="offcanvas " id="offcanvasRight" show={show} onHide={handleClose} placement="end" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <hr/>
                        <Nav className="flex-column d-flex gap-1 col-12 mx-auto" >
                            <Nav.Link as={Link} to="/" onClick={handleLinkClick}  className="fs-4 btn btn-outline-success text-dark fw-light btn-bd-primary btn-block">
                               <FaHouse/>    Home
                            </Nav.Link> <hr/>
                            <Nav.Link as={Link} to="/missao" onClick={handleLinkClick} className="fs-4 btn btn-outline-success text-dark fw-light btn-bd-primary">
                                <FaArrowUpWideShort/> Missão
                            </Nav.Link><hr/>
                            <Nav.Link as={Link} to="/institucional" onClick={handleLinkClick} className="fs-4 btn btn-outline-success text-dark fw-light btn-bd-primary">
                                <FaBuildingColumns/> Institucional
                            </Nav.Link> <hr/>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </div>

    );
};

export default Menu;
