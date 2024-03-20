import React from 'react';
import { Link } from 'react-router-dom';
import LogoSm from '../assets/images/logo-small.svg';
import Logo from '../assets/images/logo.svg';
import User from '../assets/images/user.png';

class NavbarComponent extends React.Component {
    // connectWallet = async () => {
    //     if ("phantom" in window && window.phantom.solana) {
    //         try {
    //             const response = await window.phantom.solana.connect({ onlyIfTrusted: true });
    //             console.log("Kết nối thành công:", response);

    //             let publicKey = window.phantom.solana.publicKey.toBase58();
    //             console.log(publicKey);

    //         } catch (error) {
    //             console.error("Đã có lỗi xảy ra: ", error);
    //         }
    //     } else {
    //         alert("Bạn chưa cài đặt Extension Phantom Wallet.");
    //     }
    // }
    //Rejected Error
    connectWallet = async () => {
        await window.phantom.solana.connect();

        let publicKey = window.phantom.solana.publicKey.toBase58();
        console.log("Public Key:", publicKey);
    }
    render() {
        return (
            <header className="header">
                <div className="container">

                    <a href="#">
                        <img src={LogoSm} width="40" height="40" alt="Metalink home" className="logo-small"></img>
                        <img src={Logo} width="126" height="28" alt="Metalink home" className="logo"></img>
                    </a>

                    <nav className="navbar" data-navbar>
                        <ul className="navbar-list">
                            <li>
                                <Link to="/" className="navbar-link label-lg link:hover">Home</Link>
                            </li>

                            <li>
                                <a href="#" className="navbar-link label-lg link:hover">Football</a>
                            </li>

                            <li>
                                <a href="#" className="navbar-link label-lg link:hover">NBA</a>
                            </li>

                            <li>
                                <Link to="/mint-nft" className="navbar-link label-lg link:hover">Mint NFT</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-action">

                        <button className="btn-icon primary" aria-label="wallet" onClick={this.connectWallet}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                            </svg>
                        </button>

                        <button className="btn-icon profil-btn" aria-label="Account: Account">
                            <img src={User} width="50" height="50" className="img-cover"></img>
                        </button>

                        <button className="nav-toggle-btn" aria-label="menu toggle" data-nav-toggler>
                            <ion-icon name="menu-outline" aria-hidden="true" className="default-icon"></ion-icon>

                            <ion-icon name="close-outline" aria-hidden="true" className="active-icon"></ion-icon>
                        </button>

                    </div>

                </div>
            </header>
        )
    }
}

export default NavbarComponent;