import React from 'react';

export default() => {
    return (<nav className="navbar navbardefault">
        <div className="container-fluid">
            <div className="navbar-header">
                <a href="#" className="navbar-brand">Red Dice</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">Sign Out</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>);
}