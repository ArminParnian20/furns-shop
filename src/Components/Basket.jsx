import React, { useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import simpleContext from './../context';
import swal from 'sweetalert';


const Basket = () => {
        const context = useContext(simpleContext);
        const basket = context.basket;
        const setbasket = context.setbasket;
        const basketProducts =context.basketProducts;
         const setbasketProducts =context.setbasketProducts;
    const deleteproducd=(i)=>{
       let basketProductsCopy=[...basketProducts]
       basketProductsCopy = basketProductsCopy.filter(p=>p.id !== i);
       setbasketProducts(basketProductsCopy);
       swal({
        title:"Successly",
        text:"The product was deleted to the cast",
        icon:"success",
        button:"ok",
    });
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
                    return(
                           <li><img  src={process.env.PUBLIC_URL+`/images/${p.id}.jpg`}/>
                        <div>
                            <div className='det'>
       <p>{p.name}</p>
                           <p>{p.price}</p>
                           <i className='bi bi-trash go-all' onClick={()=>deleteproducd(p.id)}></i>
                            </div>
                    
     
                        </div>

                           </li>
                       )  
             
            
                   })
               }
               <button className='View-cart'>
                   <h6>View Cart</h6>
                   <h5>189.00$</h5>
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