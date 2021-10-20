import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand">
                    Mi Proyecto
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a to="/" className="nav-link">
                                Home{' '}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a to="/nosotros" className="nav-link">
                                Nosotros{' '}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a to="/servicios" className="nav-link">
                                Servicios{' '}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a to="/contacto" className="nav-link">
                                Contacto{' '}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
