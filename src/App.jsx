import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { About, Home, Navbar, PageNotFound } from './components/index'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<PageNotFound />}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
