import { Nav } from './components/nav'
import './App.css'
import { Routes, Route,} from 'react-router-dom'
import {Home} from './pages/Home'
import {Projects} from './pages/Projects'
import {AboutMe} from './pages/AboutMe'
import {Contacts} from './pages/Contacts'
import {SocialMedia} from './components/socialMedia'

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
    </>
  )
}

export default App
