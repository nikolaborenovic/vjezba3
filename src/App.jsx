import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './features/Navigation/Navigation'
import Home from './features/Home/Home'
import Offer from './features/Offer/Offer'
import HowTo from './features/How-to/HowTo'
import About from './features/About/About'
import Contact from './features/Contact/Contact'
import Cart from './features/Cart/Cart'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/offer' element={<Offer/>}/>
          <Route path='/how-to' element={<HowTo/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
