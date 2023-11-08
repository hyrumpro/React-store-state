import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../reducers/cartSlice';


export const Cart = () => {
	const dispatch = useDispatch();
	const { products } = useSelector(state => state.cart);

	const RemoveProductHandler = (id) => {
       dispatch(removeProductFromCart(id))
    }

    return(
    	<div>

        <h2>This is the cart</h2>
        <ul>
        {products.map((product) => {
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
	          		<button className="btn btn-danger" 
	          		        onClick={() => RemoveProductHandler(product.id)}>Remove from cart </button>
	          	   </li>
        		)
        })}
        </ul>
       
        <li><Link to="/products">Go to products</Link></li>
        </div>

    	);
}