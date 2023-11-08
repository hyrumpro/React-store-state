import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../reducers/cartSlice';



export const ProductsList = ({ products }) => {
	const dispatch = useDispatch();
	const { products: productsInCart } = useSelector(state => state.cart);
	const addProductHandler = (id) => {
		const productFinded = products.find(oneProduct => oneProduct.id === id);

		if(productsInCart.find(oneProduct => oneProduct.id === id)) {
		    dispatch(removeProductFromCart(id));
		    return;
	    };
	    dispatch(addProductToCart(productFinded));

	}

	return(
		<>
		 <h2>Products Page</h2>
         <ul>
	          {products.map(product => {
	          	return(
	          	 <li key={product.id}>
	          		<h2>{product.title}</h2>
	          		<img 
		          		src={product.images[0]} 
		          		alt={product.title} 
		          		style={{ 
		          			widht: "200px",
		          			marginBottom: "10px",

		          		}} />
	          		<strong>{`$ ${product.price}`}</strong>
	          		<br />
	          		<Link to={`/products/${product.id} `} className="btn btn-primary">Ver Detalle</Link>
	          		<button className={`btn btn-warning ${productsInCart.find(pdt => pdt.id === product.id) ? "btn-danger" : "btn-warning"}`} onClick={() => addProductHandler(product.id)}>
	          		        {productsInCart.find(pdt => pdt.id === product.id) ? "Remove from cart" : "Add to cart"}
	          		</button>
	          		<hr />
	          	</li>
	          	)
	          })}
          </ul>
         </>
		);
}