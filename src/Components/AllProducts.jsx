import React, { useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import simpleContext from './../context';
import { Link } from 'react-router-dom';
const AllProducts = () => {
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
    }
    const handlfavorite=(id)=>{
        const productsCopy=[...products];
        productsCopy[id-1].favorite=!productsCopy[id-1].favorite;
        setproducts(productsCopy);
        const favoritesCopy=products.filter((p)=>p.favorite==true);
        setfavorites(favoritesCopy);
    }
    return ( <Fragment>
      <div className="products">
            <ul>
            {
                   products.map((p)=>{
                       return(
                           <li><img  src={process.env.PUBLIC_URL+`/images/${p.id}.jpg`}/>
                           <p>{p.name}</p>
                           <p>{p.price}</p>
                           <p><i className={p.favorite ? "bi bi-heart-fill red":"bi bi-heart"} onClick={()=>handlfavorite(p.id)}></i> 
                           <i className='bi bi-arrow-repeat'></i>
                           <i className='bi bi-arrows-fullscreen'></i>
                         </p>
                           <button onClick={()=>addproducttoBasket(p.id,p.name,p.price)}><i className="bi-cart4"> Add to Cart</i></button>
                           </li>
                       )
                   })
               }
                           
            </ul>
        </div>
    </Fragment> );
}
 
export default AllProducts;