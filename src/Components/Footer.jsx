import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
const Footer = () => {
    return (<Fragment>
        <div className="footer">
            <ul>
                <li>
                    <h2>ABOUT</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente ullam voluptatem!</p>
                </li>
                <li>
                    <h2>INFORMATION</h2>
                     <ul>
                         <li>About Us</li>
                         <li>Manufactures</li>
                         <li>Tracking Order</li>
                         <li>Privacy & Policy</li>
                         <li>Terms & Conditions</li>
                     </ul>
                </li>
                <li>
                    <h2>MY ACCOUNT</h2>
                    <ul>
                        <li>Login</li>
                        <li>My Cart</li>
                        <li>Wishlist</li>
                        <li>Compare</li>
                        <li>My Account</li>
                    </ul>
                </li>
                <li>
                    <h2>NEWSLETTER</h2>
                    <input type="text"placeholder='Enter E=mail Address'/>
                    <button className='go-all'>Subscribe</button>
                </li>
            </ul>
        </div>
    </Fragment>  );
}
 
export default Footer;