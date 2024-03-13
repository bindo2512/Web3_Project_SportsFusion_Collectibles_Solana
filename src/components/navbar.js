import React from 'react';
import LogoSm from '../assets/images/logo-small.svg';
import Logo from '../assets/images/logo.svg';
import User from '../assets/images/user.png';

class NavbarComponent extends React.Component {
    render() {
        return (
            <header class="header">
                <div class="container">

                    <a href="#">
                        <img src={LogoSm} width="40" height="40" alt="Metalink home" class="logo-small"></img>
                        <img src={Logo} width="126" height="28" alt="Metalink home" class="logo"></img>
                    </a>

                    <nav class="navbar" data-navbar>
                        <ul class="navbar-list">
                            <li>
                                <a href="#" class="navbar-link label-lg link:hover">Home</a>
                            </li>

                            <li>
                                <a href="#" class="navbar-link label-lg link:hover">Football</a>
                            </li>

                            <li>
                                <a href="#" class="navbar-link label-lg link:hover">NBA</a>
                            </li>

                            <li>
                                <a href="#" class="navbar-link label-lg link:hover">Mint NFT</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="header-action">

                        <button class="btn-icon primary" aria-label="wallet" onclick="connectWallet()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                            </svg>
                        </button>

                        <button class="btn-icon profil-btn" aria-label="Account: Account">
                            <img src={User} width="50" height="50" class="img-cover"></img>
                        </button>

                        <button class="nav-toggle-btn" aria-label="menu toggle" data-nav-toggler>
                            <ion-icon name="menu-outline" aria-hidden="true" class="default-icon"></ion-icon>

                            <ion-icon name="close-outline" aria-hidden="true" class="active-icon"></ion-icon>
                        </button>

                    </div>

                </div>
            </header>
        )
    }
}

export default NavbarComponent;