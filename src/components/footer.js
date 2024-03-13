import React from 'react';
import Logo from '../assets/images/logo.svg';
import AppStore from '../assets/images/appstore.png';
import PlayStore from '../assets/images/playstore.png';

class FooterComponent extends React.Component {
    render() {
        return (
            <footer class="footer">

                <div class="section footer-top">
                    <div class="container">

                        <div class="footer-brand">

                            <a href="#">
                                <img src={Logo} width="126" height="28" loading="lazy" alt="Metalink home"></img>
                            </a>

                            <p class="body-md footer-text">
                                Buy, sell, and trade digital player cards – which features thousands of players – week over week and season over season.
                            </p>
                        </div>

                        <ul class="footer-list">

                            <li>
                                <p class="title-lg footer-list-title">Metalink</p>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>

                                    <span class="span">Explore Item</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>

                                    <span class="span">Live Auction</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>

                                    <span class="span">Activities</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>

                                    <span class="span">Wallets</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>

                                    <span class="span">Creators</span>
                                </a>
                            </li>

                        </ul>

                        <ul class="footer-list">

                            <li>
                                <p class="title-lg footer-list-title">Useful Links</p>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                    <span class="span">About Us</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>

                                    <span class="span">Blog & News</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>

                                    <span class="span">Terms & Condition</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>

                                    <span class="span">Privacy policy</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>

                                    <span class="span">Login</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>

                                    <span class="span">Contact Us</span>
                                </a>
                            </li>

                        </ul>

                        <div class="footer-list">

                            <ul>

                                <li>
                                    <p class="title-lg footer-list-title">Download the SportsFusion</p>
                                </li>

                                <li class="footer-list-item">
                                    <a href="#">
                                        <img src={AppStore} width="134" height="40" loading="lazy"
                                            alt="Download Metalink app from AppStore"></img>
                                    </a>

                                    <a href="#">
                                        <img src={PlayStore} width="134" height="40" loading="lazy"
                                            alt="Download Metalink app from PlayStore"></img>
                                    </a>
                                </li>

                            </ul>

                            <ul>

                                <li>
                                    <p class="title-lg footer-list-title">Contact Details</p>
                                </li>

                                <li class="footer-list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                    </svg>

                                    <a href="mailto:metalink@nft.com" class="footer-link">sportfusion@nft.com</a>
                                </li>

                                <li class="footer-list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                    </svg>

                                    <a href="tel:+111 234-567-891" class="footer-link">+111 234-567-891</a>
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">

                        <p class="body-md text-center copyright">
                            &copy; 2024 Solana Web3 App - <span class="span">FPT Polytechnic</span>- Group 16
                        </p>

                    </div>
                </div>

            </footer>

        )
    }
}

export default FooterComponent;