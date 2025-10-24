// import React from 'react'
// import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types'
// import { useState } from 'react';

export default function Navbar(props) {

    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
            <div class="container-fluid">
            {/* <Nav.Link as = {Link} className="navbar-brand" to="/">Navbar</Nav.Link> */}
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                    {/* <Nav.Link as = {Link} className="nav-Nav.Link" to="/">Home</Nav.Link> */}

                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                    {/* <Nav.Link as = {Link} className="nav-Nav.Link" to="/About">{props.about}</Nav.Link> */}

                            <a class="nav-link" href="#">About</a>
                        </li>

                    </ul>
                    <div className="d-flex flex-row-reverse mx-3"  >
                    <button type="button" class={`btn btn-${props.btnText} btn-outline-${props.btnText} `} onClick={props.toggleMode}>{props.btnText}</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,
    mode: PropTypes.string,
    toggleMode: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Navbar',
    about: 'About',
    mode: 'light',
    toggleMode: 'light',
    btnText: 'dark'
} 