import {HashRouter as Router, Routes, Route} from 'react-router'

import './css/app.css'

import Home from './pages/Home.jsx'
import Games from './pages/Games.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <section className='main'>
          {/*define web routes.*/}
          <Routes>
            <Route path='/Portfolio/' element={<Home />} />
            <Route path='/Portfolio/games' element={<Games />} />
            <Route path='/Portfolio/resume' element={<Resume />} />
            <Route path='/Portfolio/contact' element={<Contact />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </>
  )
}

export default App
