import React from 'react';
import { Link } from 'react-router-dom';
import { logoImage } from "./data"

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="pos-f-t">
                    <nav className="navbar navbar-dark bg-dark">
                            <div className="col-3 col-md-5">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            
                            <Link to="/home" className='logo col-6 col-md-5'><img className='logo' src= { logoImage.logoImage } /> </Link>
                            
                    </nav>
                    <div className="collapse" id="navbarToggleExternalContent">
                    <div className="nav-item dropdown">
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/videos">Videos</Link>
                            <Link className="dropdown-item" to="/gaming">Gaming</Link>
                            <Link className="dropdown-item" to="/gameStrategy">Game Strategy</Link>
                            <Link className="dropdown-item" to="/preference">Preference</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}


