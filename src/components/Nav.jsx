import React from 'react'
import { Link } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'
import { FaFileSignature } from 'react-icons/fa'
import { MdOutlineContactMail } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand"><BiHome size={30} style={{ color: 'white' }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/contacto"><FaFileSignature size={30} style={{ color: 'white' }} />
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"><MdOutlineContactMail size={30} style={{ color: 'white' }} /></Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="#"><FaShoppingCart size={30} style={{ color: 'white' }} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav
