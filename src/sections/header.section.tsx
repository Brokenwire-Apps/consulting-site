import { Nav } from '../components/nav.component'
import Logo from '../assets/logo-1c-lt.svg'

export const Header = () => {
    return (
        <header>
          <div className="header-contain">
            <div className="brand">
              <img src={Logo} alt="Logo" />
            </div>
            <Nav />
          </div>
        </header>
    )
}