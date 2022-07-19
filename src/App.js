import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar'
import Banner from './components/banner'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='' element={<Banner />} />
          <Route path='/tecnologías' />
          <Route path='/proyectos' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
