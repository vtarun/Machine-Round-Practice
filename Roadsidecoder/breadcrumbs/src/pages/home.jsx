import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/product')
        .then(res => res.json())
        .then(result => {
            const productList = result.products.splice(0, 6);            
            setProducts(productList);
        })
    }, []);

  return (
    <div>
    <h1>Home</h1>
    <div className='products-grid'>
      {products.map((product) => {
       return (<div key={product.id} className='product-card'>
            <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <p>Price {product.price}</p>
                <p>{product.title}</p>
            </Link>
        </div>)
      })}
      </div>
    </div>
  )
}

export default Home
