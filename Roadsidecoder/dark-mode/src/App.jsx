import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Navbar from './components/navbar';
import { ThemeContextProvider } from './theme.context';

function App() {

  return (
    <ThemeContextProvider>            
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

    </ThemeContextProvider>
  )
}

export default App
