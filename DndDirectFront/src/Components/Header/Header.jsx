import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom
import './Header.css'

function Header() {
    return (
        <header>
            <Link to="/" className="btn btn-secondary">Главная</Link>
            <Link to="/armors" className="btn btn-secondary">Доспехи</Link>
            <Link to="/weapons" className="btn btn-secondary">Оружие</Link>
            <Link to="/spells" className="btn btn-secondary">Заклинания</Link>
        </header>
    );
}

export default Header;