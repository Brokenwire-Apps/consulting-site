import './App.scss'
import { Nav } from './components/nav.component'
import Logo from './assets/logo-1c-lt.svg'

function App() {

  return (
    <>
      <div>
        <header>
          <div className="brand">
            <img src={Logo} alt="Logo" />
          </div>
          <Nav />
        </header>
      </div>
    </>
  )
}

export default App
