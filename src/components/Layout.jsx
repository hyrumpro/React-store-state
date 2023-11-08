import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Layout = () => {
 const { totalCount } = useSelector(state => state.cart);
 console.log(totalCount);

	return(
        <>
           <div className="container">
           	 <h2>React Router</h2>
           	 <p>Products in the cart: <strong>{totalCount}</strong> </p>
		       <nav>
		         <ul>
		           <li><Link to="/">Home</Link></li>
		           <li><Link to="/about-us">About Us</Link></li>
		           <li><Link to="/products">Products</Link></li>
		           <li><Link to="/cart">Cart</Link></li>
		         </ul>
		       </nav>
               <hr />

                <Outlet />
  
               <footer>
               	<hr />
               	<p>Copyright 2023 All Righ Reserved</p>
               </footer>

           </div>
        </>
		)
}