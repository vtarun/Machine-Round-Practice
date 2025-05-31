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
  const paginationArray = new Array(totalPages).fill(null);

  const startIndex = currentPage * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {loading && <p>Loading...</p>}
      <div style={{width: "100%", display: "flex", "justifyContent": 'space-between', "flexWrap": "wrap"}}>
        {visibleProducts.map(item => {
          return (<div key={item.id}>
            <img src={item.thumbnail} />
          </div>)
        })}
      </div>
      <div style={{display: "flex", gap: 5}}>
        <button  onClick={() => setCurrentPage(currentPage-1)} style={{pointerEvents: currentPage == 0 ? 'none': 'auto'}}>Previous</button>
        {paginationArray.map((_, index) => {
          return <button key={index} onClick={() => setCurrentPage(index)} style={{padding: "20px"}}>{index+1}</button>
        })}
        <button  onClick={() => setCurrentPage(currentPage+1)} style={{pointerEvents: currentPage == totalPages-1 ? 'none': 'auto'}}>Next</button>
      </div>
    </>
  )
}

export default App
