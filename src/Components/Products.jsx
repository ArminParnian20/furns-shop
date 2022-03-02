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
        productsCopy[id].favorite=!productsCopy[id].favorite;
        setproducts(productsCopy);
        const favoritesCopy=products.filter(p=>p.favorite==true);
        setfavorites(favoritesCopy);
        swal({
            title:"Successly",
            text:"The product was added to the cast",
            icon:"success",
            button:"ok",
        });
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
                           {
                             products[0].n> 0? <div className='add-box'><p onClick={()=>addproducttoBasket(products[0].id,-1)}>-</p><p>{products[0].n}</p><p onClick={()=>addproducttoBasket(products[0].id,1)}>+</p></div> : 
                             <button onClick={()=>addproducttoBasket(products[0].id,1)}>
                                 <i className="bi-cart4"> Add to Cart</i></button>
                         }
                           </li>
                           <li><img  src={process.env.PUBLIC_URL+`/images/${products[1].id}.jpg`}/>
                           <p>{products[1].name}</p>
                           <p>{products[1].price}</p>
                           <p><i className={products[1].favorite ? "bi bi-heart-fill red":"bi bi-heart"} onClick={()=>handlfavorite(1)}></i> <i className='bi bi-arrow-repeat'></i> <i className='bi bi-arrows-fullscreen'></i></p>
                           {
                             products[1].n> 0? <div className='add-box'><p onClick={()=>addproducttoBasket(products[1].id,-1)}>-</p><p>{products[1].n}</p><p onClick={()=>addproducttoBasket(products[1].id,1)}>+</p></div> : 
                             <button onClick={()=>addproducttoBasket(products[1].id,1)}>
                                 <i className="bi-cart4"> Add to Cart</i></button>
                         }
                           </li>
                            <li><img  src={process.env.PUBLIC_URL+`/images/${products[2].id}.jpg`}/>
                           <p>{products[2].name}</p>
                           <p>{products[2].price}</p>
                           <p><i className={products[2].favorite ? "bi bi-heart-fill red":"bi bi-heart"} onClick={()=>handlfavorite(2)}></i> <i className='bi bi-arrow-repeat'></i> <i className='bi bi-arrows-fullscreen'></i></p>
                           {
                             products[2].n> 0? <div className='add-box'><p onClick={()=>addproducttoBasket(products[2].id,-1)}>-</p><p>{products[2].n}</p><p onClick={()=>addproducttoBasket(products[2].id,1)}>+</p></div> : 
                             <button onClick={()=>addproducttoBasket(products[2].id,1)}>
                                 <i className="bi-cart4"> Add to Cart</i></button>
                         }
                           </li>
                            <li><img  src={process.env.PUBLIC_URL+`/images/${products[3].id}.jpg`}/>
                           <p>{products[3].name}</p>
                           <p>{products[3].price}</p>
                           <p><i className={products[3].favorite ? "bi bi-heart-fill red":"bi bi-heart"} onClick={()=>handlfavorite(3)}></i> <i className='bi bi-arrow-repeat'></i> <i className='bi bi-arrows-fullscreen'></i></p>
                           {
                             products[3].n> 0? <div className='add-box'><p onClick={()=>addproducttoBasket(products[3].id,-1)}>-</p><p>{products[3].n}</p><p onClick={()=>addproducttoBasket(products[3].id,1)}>+</p></div> : 
                             <button onClick={()=>addproducttoBasket(products[3].id,1)}>
                                 <i className="bi-cart4"> Add to Cart</i></button>
                         }
                           </li>
            </ul>
            <Link to='/allproducts' className='go-all'>All Products <i className='bi bi-cart3'></i></Link>
        </div>
    </Fragment> );
}
export default Products;