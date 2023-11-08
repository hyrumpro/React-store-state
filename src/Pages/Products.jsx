import { useEffect, useState} from "react";
import { Link, Routes, Route } from 'react-router-dom';
import { ProductDetail } from '../components/ProductDetails';
import { ProductsList } from '../components/ProductsList';



export const Products = () => {
	const [productsState, setProducts] = useState([]);

    useEffect(() => {
		const fetchProducts = async () => {
			try {
				const productResponse = await fetch("https://dummyjson.com/products");
				const productData = await productResponse.json();
				setProducts(productData.products);
			} catch (error) {
				console.error("Error fetching products: ", error);
			}
		};
		fetchProducts();
	}, []);

    return(
    	<>
          <Routes>
            <Route index element={<ProductsList products={productsState} /> } />
          	<Route path=":productID" element={<ProductDetail /> } />
          </Routes>
        </>
    	);


};