import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import simpleContext from './../context';
const BottomMenu = () => {
    const context = useContext(simpleContext);
    const basket = context.basket;
    const setbasket = context.setbasket;
    const basketProducts =context.basketProducts;
    return (  
        <Fragment>
            <div className='bottom-menu' >
                <ul>
                    <li>
                        <Link to='/compare' className='link'>
                             <i className='bi bi-arrow-repeat'></i>
                    <p>Compare</p>
                        </Link>
                      </li> 
                    <li>
                       <Link to="/wishlist" className='link'>
                           <i className='bi bi-heart'></i>
                    <p>Wishlist</p>
                           </Link> </li>
                    <li>
                        <Link to="/" className='link'>
                            <i className='bi bi-house-door'></i>
                    <p>Home</p>
                        </Link>
                       </li>
                    <li  onClick={()=> setbasket(!basket)}><i className='bi bi-cart4 basket'><span>{basketProducts.length}</span></i>
                    <p>Cart </p></li>
                    <li>
                    <Link to="/account" className='link'>
                        <i className='bi bi-person'></i>
                    <p>Account</p>
                        </Link>
                    </li>


                </ul>
            </div>
        </Fragment>
    );
}
 
export default BottomMenu;