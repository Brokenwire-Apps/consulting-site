import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@awesome.me/kit-67f463dc1d/icons/sharp-duotone/solid';

export const Nav = () => {
    return (
        <nav>
            <FontAwesomeIcon icon={faBars} />
            <ul className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};