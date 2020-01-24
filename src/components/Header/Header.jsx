import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://png.pngtree.com/element_our/png_detail/20181122/colorful-gradient-blue-pastel-watercolor-border-png_245470.jpg"
                alt=""/>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? props.login :<NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
};

export default Header;