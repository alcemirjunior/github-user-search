import React from 'react';
import { Link } from 'react-router-dom'
import './styles.scss'
import 'app.scss'

const Navbar = () => (
    <nav className="main-navbar">

        <Link to="/" className="nav-text">
            Bootcamp DevSuperior
        </Link>

    </nav>
)

export default Navbar;