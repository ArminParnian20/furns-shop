import React, { useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import simpleContext from '../context';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
const Products = () => {
    const context = useContext(simpleContext);
    const products=context.products;
    const setproducts = context.setproducts;
    const setfavorites = context.setfavorites;
    const basketProducts =context.basketProducts;
    const setbasketProducts =context.setbasketProducts;
    const addproducttoBasket=(i,n,p)=>{
        const newproduct={
            id:i,
            name:n,
            price:p
        }
        const products=[...basketProducts];
         products.push(newproduct)
        setbasketProducts(products)
        swal({
            title:"Successly",
            text:"The product was added to the cast",
            icon:"success",
            button:"ok",
        });
     }
    const handlfavorite=(id)=>{
        const productsCopy=[...products];
        productsCopy[id].favorite=!productsCopy[id].favorite;
        setproducts(productsCopy);
        const favoritesCopy=products.filter(p=>p.favorite==true);
        setfavorites(favoritesCopy);
    }   
    return ( <Fragment>
        <div className="products">
            <div>
                <h1>Our Products</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit laborum, non deserunt quaerat blanditiis sed neque tenetur? Obcaecati, nulla doloribus.</p>
             <p></p> 
            </div>
            <ul>
       
            <li><img  src={process.env.PUBLIC_URL+`/images/${products[0].id}.jpg`}/>
                           <p>{products[0].name}</p>
                           <p>{products[0].price}</p>
                           <p><i className={products[0].favorite ? "bi bi-heart-fill red":"bi bi-heart"} onClick={()=>handlfavorite(0)}></i> <i className='bi bi-arrow-repeat'></i> <i className='bi bi-arrows-fullscreen'></i></p>
                           <button onClick={()=>addproducttoBasket(products[0].id,products[0].name,products[0].price)} ><i className="bi-cart4"> Add to Cart</i></button>
                           </li>
                           <li><img  src={process.env.PUBLIC_URL+`/images/${products[1].id}.jpg`}/>
                           <p>{products[1].name}</p>
                           <p>{products[1].price}</p>
                           <p><i className={products[1].favorite ? "bi bi-heart-fill red":"bi bi-heart"} onClick={()=>handlfavorite(1)}></i> <i className='bi bi-arrow-repeat'></i> <i className='bi bi-arrows-fullscreen'></i></p>
                           <button onClick={()=>addproducttoBasket(products[1].id,products[1].name,products[1].price)} ><i className="bi-cart4"> Add to Cart</i></button>
                           </li>
                            <li><img  src={process.env.PUBLIC_URL+`/images/${products[2].id}.jpg`}/>
                           <p>{products[2].name}</p>
                           <p>{products[2].price}</p>
                           <p><i className={products[2].favorite ? "bi bi-heart-fill red":"bi bi-heart"} onClick={()=>handlfavorite(2)}></i> <i className='bi bi-arrow-repeat'></i> <i className='bi bi-arrows-fullscreen'></i></p>
                           <button onClick={()=>addproducttoBasket(products[2].id,products[2].name,products[2].price)} ><i className="bi-cart4"> Add to Cart</i></button>
                           </li>
                            <li><img  src={process.env.PUBLIC_URL+`/images/${products[3].id}.jpg`}/>
                           <p>{products[3].name}</p>
                           <p>{products[3].price}</p>
                           <p><i className={products[3].favorite ? "bi bi-heart-fill red":"bi bi-heart"} onClick={()=>handlfavorite(3)}></i> <i className='bi bi-arrow-repeat'></i> <i className='bi bi-arrows-fullscreen'></i></p>
                           <button onClick={()=>addproducttoBasket(products[3].id,products[3].name,products[3].price)} ><i className="bi-cart4"> Add to Cart</i></button>
                           </li>
            </ul>
            <Link to='/allproducts' className='go-all'>All Products <i className='bi bi-cart3'></i></Link>
        </div>
    </Fragment> );
}
 
export default Products;