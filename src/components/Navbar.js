// import React from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types'
// import { useState } from 'react';

export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body" data-bs-theme={props.mode}>
            <div className="container-fluid">
                <Nav.Link as = {Link} className="navbar-brand" to="/">Navbar</Nav.Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Nav.Link as = {Link} className="nav-Nav.Link active" aria-current="page" to="/">Home</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link as = {Link} className="nav-Nav.Link" to="/About">{props.about}</Nav.Link>
                        </li>
                    </ul>
                    {/* <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode} checked />
                            <label class="form-check-label" for="switchCheckChecked">{props.mode}</label>
                    </div> */}
                    <div className="d-flex flex-row-reverse mx-3"  >
                        <button type="button" class={`btn btn-${props.btnText} btn-outline-${props.btnText} `} onClick = {props.toggleMode}>{props.btnText}</button>
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
    toggleMode : 'light',
    btnText : 'dark'
} 