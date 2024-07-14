import React from 'react';
import {Link} from "react-router-dom";
import './menu-component.css'

const MenuComponent = () => {
    return (
        <div className="wrap-menu">
            <Link to={''} className="logo">Logo</Link>
            <ul className="menu">
                <li><Link to={''}>home</Link></li>
                <li><Link to={'users'}>users page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
                <li><Link to={'comments'}>comments page</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;