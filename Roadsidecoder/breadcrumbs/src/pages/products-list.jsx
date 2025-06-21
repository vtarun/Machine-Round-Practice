import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    
        useEffect(() => {
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(result => {
                const productList = result.products;
                setProducts(productList);
            })
        }, []);
  return (
    <div className='products-grid'>
      {products.map((product) => {
        return (<div key={product.id} className='product-card'>
            <Link to={ `/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <p>Price {product.price}</p>
                <p>{product.title}</p>
            </Link>
        </div>)
      })}
    </div>
  )
}

export default ProductsList
