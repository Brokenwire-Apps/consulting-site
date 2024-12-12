import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Header } from './sections/header.section'
import { Home } from './pages/home.page'
import { Footer } from './sections/footer.section'

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
        <Footer />
      </div>
    </>
  )
}

export default App
