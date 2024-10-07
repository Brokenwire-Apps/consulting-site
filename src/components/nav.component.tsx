import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@awesome.me/kit-67f463dc1d/icons/sharp-duotone/solid';

export const Nav = () => {
    const OpenNav = () => {
        const menu = document.querySelector('.menu');
        const close = document.querySelector('.menu-close');
        close?.classList.toggle('active');
        menu?.classList.toggle('active');
    };
    
    return (
        <nav>
            <FontAwesomeIcon className='menu-trigger' onClick={OpenNav} icon={faBars} />
            <FontAwesomeIcon className='menu-close' onClick={OpenNav} icon={faClose} />
            <ul className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};