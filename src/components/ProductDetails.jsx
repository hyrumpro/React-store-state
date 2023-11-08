import { useParams, Link } from 'react-router-dom';
import { useEffect, useState} from "react";


export const ProductDetail = () => {
	const [product, setProduct] = useState(null);
	
	const { productID } = useParams();
	console.log(productID)

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const productResponse = await fetch(`https://dummyjson.com/products/${productID}`);
				const productData = await productResponse.json();
				setProduct(productData);
			} catch (error) {
				console.error("Error fetching products: ", error);
			}
		};
		fetchProducts();
	}, [productID]);
    
    return(
    	<>
    	<h2>Detalle del Producto</h2>
    	{product && (
    		<div>
              <h3>{product.title}</h3>
              <i>{`Brand: ${product.brand}`}</i><br />
              <i>{`Category: ${product.category}`}</i>
              <img 
		          src={product.images[0]} 
		          alt={product.title} 
		          style={{ 
		          	width: "300px",
		          	marginBottom: "10px",

		       }} />
		       <p>{product.description}</p>
		       <strong>{`$ ${product.price}`}</strong><br />
		       <Link to="/products">Volver</Link>
             </div>

    		)}
    	</>
       )
}