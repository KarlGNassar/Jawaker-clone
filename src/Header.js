import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PublicIcon from '@material-ui/icons/Public';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Clock from './Clock';

function Header() {
    return (
        <div className="header">
            <div className="header__top">
                <div className="header__clock">
                    <small><Clock /></small>
                    <AccessTimeIcon />
                    <div className="header__clockText">
                        <small>Jawaker Time</small>
                    </div>
                </div>
                <div className="header__help">
                    <button>?</button>
                    <button><PublicIcon /></button>
                </div>
            </div>

            <div className="header__bottom">
                <Link to="/" className="header__linker">
                    <img className="header__logo" src="https://s3.amazonaws.com/akhtaboot_public/ExploreCompanies/jawaker/jawaker.png"
                        alt="Jawaker Logo" />
                </Link>
                <div className="header__options">
                    <Link to="/games" className="header__linker">
                        <span>Games</span>
                    </Link>

                    <Link to="/competitions" className="header__linker">
                        <span>Competions</span>
                    </Link>

                    <Link to="/challenges" className="header__linker">
                        <span>Challenges</span>
                    </Link>

                        <span className="header__linker">Clubs</span>
                    
                    <Link to="/store" className="header__linker">
                            <span className="header_buttons__store"><ShoppingCartIcon/></span>
                            <span>Store</span>
                    </Link>
                </div>

                <div className="header__auth">
                    <Link to="/login">
                        <button id="header__auth__login">Login</button>
                        <button id="header__auth__signup">Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
