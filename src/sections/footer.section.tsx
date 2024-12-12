import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@awesome.me/kit-67f463dc1d/icons/sharp-duotone/solid';

import Logo from '../assets/logo-1c-lt.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contain">
                <div className="brand">
                    <img src={Logo} alt="Logo" />
                    <FontAwesomeIcon icon={faCopyright} /> {(new Date().getFullYear())} All Rights Reserved
                </div>
                <div className="footer-links">
                    <div className="footer-link">
                        <a href="/">Home</a>
                    </div>
                    <div className="footer-link">
                        <a href="/">About</a>
                    </div>
                    <div className="footer-link">
                        <a href="/">Services</a>
                    </div>
                    <div className="footer-link">
                        <a href="/">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}