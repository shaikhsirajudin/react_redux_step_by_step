import React from 'react';
import {Link} from 'react-router-dom';
export default() => {
    return (<nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <Link to='/home' className="navbar-brand" >Red Dice</Link>
             <Link to='/about' className="navbar-brand" >About</Link>             
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                     <Link to='/signup'  >Signup Page</Link>                     
                    </li>
                </ul>

            </div>
        </div>
    </nav>);
}