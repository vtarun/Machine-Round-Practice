import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import ProductsList from './pages/products-list';
import ProductDetail from './pages/product-detail';
import Breadcrumbs from './components/breadcrumbs';

function App() {

  return (
    <>
       <Router>
        <h1>Roadsidecoder store</h1>
        <hr />
        <Breadcrumbs />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ProductsList />}/>
          <Route path="/products/:id" element={<ProductDetail />}/>
        </Routes>      
      </Router>
    </>
  )
}

export default App
