import {Link} from "react-router-dom"
import React from 'react';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/GroupedTeamMembers">Teams</Link>
                </li>
            </ul>
        </nav>
    )
} 

export default Nav;