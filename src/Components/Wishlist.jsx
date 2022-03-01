import React, { useContext} from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import simpleContext from './../context';
const Wishlist = () => {
    const context = useContext(simpleContext);
    const products=context.products;
    const setproducts = context.setproducts;
    const favorites = context.favorites;
    const setfavorites = context.setfavorites;
    const handlfavorite=(id)=>{
        const productsCopy=[...products];
        productsCopy[id-1].favorite=!productsCopy[id-1].favorite;
        setproducts(productsCopy);
        const favoritesCopy=products.filter(p=>p.favorite==true);
        setfavorites(favoritesCopy);

    }
    return (
        <Fragment>
                 <div className='ad-about'>
                    <h1>WISHLIST</h1>
                <h2>Home / WISHLIST</h2>
            </div>
            <div className='wishlist'>
           <div>
           </div>
           {favorites.length > 0 ? 
           <ul>
                 {favorites.map((p)=>{
                   
                     
                                         return(
                           <li><img  src={process.env.PUBLIC_URL+`/images/${p.id}.jpg`}/>
                        <div>
                           <p>{p.name}</p>
                           <p>{p.price}</p>
                           <p><i className={p.favorite ? "bi bi-heart-fill red":"bi bi-heart"} onClick={()=>handlfavorite(p.id)}></i></p>
                        </div>

                           </li>
                       )  
             
            
                   })
               }
               </ul>
           :<div>
            <i className='bi bi-bag-x'></i>
                    <h3>The are no products in your wishlist!</h3>
               </div>}
                </div>
        </Fragment>
      );
}
 
export default Wishlist;