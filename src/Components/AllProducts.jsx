import React, { useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import simpleContext from './../context';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const AllProducts = () => {
    const context = useContext(simpleContext);
    const products=context.products;
    const setproducts = context.setproducts;
    const setfavorites = context.setfavorites;
    const basketProducts =context.basketProducts;
    const setbasketProducts =context.setbasketProducts;
    const price =context.price;
    const setprice =context.setprice;

    const addproducttoBasket=(id,m)=>{
       let productes=[...products];
       let p=price;
       p=(productes[id-1].price * m) + p;
       setprice(p);
       productes[id-1].n=productes[id-1].n + m;
       if(productes[id-1].n == 1 & m>0){
               swal({
        title:"Successly",
        text:"The product was added to the cast",
        icon:"success",
        button:"ok",
    });   
       }
       productes=productes.filter((p)=>p.n > 0)
       setbasketProducts(productes);

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
                           <p>{p.price}$</p>
                           <p><i className={p.favorite ? "bi bi-heart-fill red":"bi bi-heart"} onClick={()=>handlfavorite(p.id)}></i> 
                           <i className='bi bi-arrow-repeat'></i>
                           <i className='bi bi-arrows-fullscreen'></i>
                         </p>
                         {
                             p.n> 0? <div className='add-box'><p onClick={()=>addproducttoBasket(p.id,-1)}>-</p><p>{p.n}</p><p onClick={()=>addproducttoBasket(p.id,1)}>+</p></div> : 
                             <button onClick={()=>addproducttoBasket(p.id,1)}>
                                 <i className="bi-cart4"> Add to Cart</i></button>
                         }
                          
                           </li>
                       )
                   })
               }
                           
            </ul>
        </div>
    </Fragment> );
}
 
export default AllProducts;