import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faStars, faPhoneOffice } from '@awesome.me/kit-67f463dc1d/icons/sharp-duotone/solid';

export const Why = () => {
    return (
        <div className="why">
            <h1>
                Why Choose Brokenwire Apps for Your Next Project?
            </h1>
            <div className="container">
                <div className="why-contain">
                    <div className="why-item">
                        
                        <h2><FontAwesomeIcon icon={faBriefcase} />Experience</h2>
                        <p>
                        With over 20 years of expertise across diverse industries, we bring a wealth of knowledge to every 
                        project. From startups to enterprises, our team has successfully delivered solutions that 
                        drive results, ensuring your project is in the hands of seasoned professionals.
                        </p>
                    </div>
                    <div className="why-item">
                        <h2><FontAwesomeIcon icon={faStars} />Quality</h2>
                        <p>
                        We’re committed to excellence in every line of code and every design choice. Our meticulous approach 
                        ensures robust, reliable, and scalable solutions that will not only meet but exceed your expectations.
                        </p>
                    </div>
                    <div className="why-item">
                        <h2><FontAwesomeIcon icon={faPhoneOffice} />Support</h2>
                        <p>
                        Our partnership doesn’t end at launch. We provide continuous support to keep your software running smoothly, 
                        adapt to your evolving needs, and ensure long-term success in a fast-changing digital landscape.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}