import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Header } from './sections/header.section'
import { Home } from './pages/home.page'

function App() {

  return (
    <>
      <div>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
