import { Nav } from './components/nav'
import './App.css'
import { Routes, Route,} from 'react-router-dom'
import {Home} from './pages/Home'
import {Projects} from './pages/Projects'
import {AboutMe} from './pages/AboutMe'
import {Contacts} from './pages/Contacts'
import {SocialMedia} from './components/socialMedia'
import { Footer } from './components/footer'

function App() {

  return (
    <>
      <SocialMedia/>
      <div className="container">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/aboutme' element={<AboutMe/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
      </div>
      <hr className='Footer-Line'/>
      <div className="container">
        <Footer/>
      </div>
    </>
  )
}

export default App
