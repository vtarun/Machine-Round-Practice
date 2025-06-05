import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';

function App() {

  return (
    <>      
      
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
        </Routes>      
      </BrowserRouter>

    </>
  )
}

export default App
