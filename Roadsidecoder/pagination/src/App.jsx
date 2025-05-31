import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async function () {
    try{
      setError('');
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const result = await response.json();
      if(response.ok){
        setProducts(result.products)
      }else{
        console.log(response.message);
        setError(result.message || "Failed to fetch products.");
      }      
    }catch(err){
      console.log('Server error : ', err.message);
      setError("Server error : " + err.message);
    } finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);



  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length/10);

  const startIndex = currentPage * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='app'>
      <h1 className='app__title'>Product Gallery</h1>
      {loading && <p className='app__message'>Loading...</p>}
      {error && <p className='app__message app__message--error'>{error}</p>}
      <div className='product-grid'>
        {visibleProducts.map(item => (
            <div key={item.id} className='product-grid__card'>
              <img 
                src={item.thumbnail} 
                alt={item.title}  
                // onError={handleImageError}
                className='product-grid__image'
              />
              <h4 className="product-grid__title">{item.title}</h4>
              <p className="product-grid__price">{item.price}</p>
            </div>
        ))}
      </div>

      <div className="pagination">
        <button  
          onClick={() => setCurrentPage(currentPage-1)} 
          disabled={currentPage <= 0}
          className='pagination__button'
        >
          Previous
        </button>
        {Array.from({length: totalPages}).map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentPage(index)} 
            aria-current={index === currentPage ? 'page' : undefined}
            className={`pagination__button ${
              currentPage === index ? 'pagination__button--active' : ''
            }`}
          >
            {index+1}
          </button>
        ))}
        <button 
          onClick={() => setCurrentPage(currentPage+1)} 
          disabled={currentPage >= totalPages -1}
          className='pagination__button'
        >
          Next
        </button>
      </div>

    </div>
  )
}

export default App
