import React from 'react'
import  Home  from './pages/home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Events from './pages/events/events'
import  Contact  from './pages/contact/contact'
import  Gallery  from './pages/gallery/gallery'
import Ourdonors from './pages/ourdonors/ourdonors'
import Navbar from './components/navbar/navbar';
import Help from './pages/help/contact'


const App = () => {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/ourdonor' element={<Ourdonors />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App;

