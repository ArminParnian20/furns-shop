import React, { useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import simpleContext from './../context';
import swal from 'sweetalert';


const Basket = () => {
        const context = useContext(simpleContext);
        const basket = context.basket;
        const setbasket = context.setbasket;
        const products=context.products;
        const setbasketProducts =context.setbasketProducts;
    const price =context.price;
    const setprice =context.setprice;

    const basketProducts =context.basketProducts;
        const addproducttoBasket=(id,m)=>{
            let productes=[...products];
            let p=price;
            p=(productes[id-1].price * m) + p;
            setprice(p);
            productes[id-1].n=productes[id-1].n + m;
            productes=productes.filter((p)=>p.n > 0)
            setbasketProducts(productes);
         } 
    return ( <Fragment>
        <div className={basket===false ? 'cart cart-active':'cart'}>
                 <div>
                 <h2><i className='bi bi-shop orang'></i> FURNS</h2>
                  <i className='bi bi-x-lg orang' onClick={()=> setbasket(!basket)}></i>
                 </div>
                 {basketProducts.length > 0 ? 
           <ul>
                 {basketProducts.map((p)=>{
                     if(p.n > 0){
            return(
                           <li><img  src={process.env.PUBLIC_URL+`/images/${p.id}.jpg`}/>
                        <div>
                            <div className='det'>
       <p>{p.name}</p>
                           <p>{p.price}</p>
                           {
                             p.n> 1? <div className='add-box'><p onClick={()=>addproducttoBasket(p.id,-1)}>-</p><p>{p.n}</p><p onClick={()=>addproducttoBasket(p.id,1)}>+</p></div> : 
                          
                           <i className='bi bi-trash go-all' onClick={()=>addproducttoBasket(p.id,-1)}></i>
                         }
                            </div>
                        </div>
                           </li>
                       ) 

                     }
         
                   })
               }
               <button className='View-cart'>
                   <h6>View Cart</h6>
                   <h5>{price}$</h5>
               </button>
            </ul>
           :<div className='empty'>
            <i className='bi bi-bag-x'></i>
                    <h3>Your shopping cart is empty!</h3>
               </div>}
        </div>
    </Fragment> );
}
 
export default Basket;