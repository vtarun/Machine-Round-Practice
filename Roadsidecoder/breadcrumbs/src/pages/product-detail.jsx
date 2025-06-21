import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(result => {            
            setProduct(result);
        })
    }, []);

  return (
    <div>
        <div>
            <img src={product?.thumbnail} alt={product?.title} />
            <p>Price {product?.price}</p>
            <p>{product?.title}</p>
        </div>
    </div>
  )
}

export default ProductDetail
