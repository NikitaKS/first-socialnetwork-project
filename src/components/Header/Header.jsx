import React from 'react';
import s from './Header.module.css';

class Header extends React.Component {
    render = () => {
        return (
            <header className={s.header}>
                <img
                    src="https://png.pngtree.com/element_our/png_detail/20181122/colorful-gradient-blue-pastel-watercolor-border-png_245470.jpg"
                    alt=""/>
            </header>
        );
    }
}
export default Header;