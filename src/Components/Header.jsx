import React, { useContext, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import {Swiper,SwiperSlide} from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css'
import SwiperCore, {Pagination} from 'swiper';

import "../../node_modules/swiper/swiper.min.css";
import simpleContext from './../context';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';


const Header = () => {
    const context = useContext(simpleContext);
    const basket = context.basket;
    const setbasket = context.setbasket;
    const basketProducts =context.basketProducts;
        const [Menu,setMenu]=useState([false,false,false,false,false,false,false,true]);
        const handlMenu=(n)=>{
           switch(n){
                case 1:
                    setMenu([!Menu[0],false,false,false,false,false,false,false]) ;
                    break;
                case 2:
                    setMenu([false,!Menu[1],false,false,false,false,false,false]) ;
                    break;
                case 3:
                    setMenu([false,false,!Menu[2],false,false,false,false,false]) ;
                    break; 
                case 4:
                    setMenu([false,false,false,!Menu[3],false,false,false,false]) ;
                    break;
                case 5:
                    setMenu([false,false,false,false,!Menu[4],false,false,false]) ;
                    break;
                case 6:
                    setMenu([false,false,false,false,false,!Menu[5],false,false]) ;
                    break;
                case 7:
                    setMenu([false,false,false,false,false,false,!Menu[6]],false) ;
                    break;
                case 8:
                    setMenu([false,false,false,false,false,false,false,!Menu[7]]) ;
                    break;
           }
           console.log(Menu);
        }
    return ( <Fragment>
        
         <div className="head">
             <div className="welcom">
                 <p>welcome to <span className='orang'>FURNS</span></p>
                  <div className='english'>
                      <div><span onClick={()=> handlMenu(1)}>USD <i className={Menu[0]===false ? 'bi bi-chevron-down':'bi bi-chevron-up'}></i></span>
                      <ul className={Menu[0]===false ? 'active':''}>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>POUND</li>
                      <li>FRANC</li>
                      </ul>
                      </div>
                      <div><span  onClick={()=> handlMenu(2)}>English <i className={Menu[1]===false ? 'bi bi-chevron-down':'bi bi-chevron-up'}></i></span>
                      <ul  className={Menu[1]===false ? 'active':''}>
                          <li>English</li>
                          <li>German</li>
                          <li>Parsian</li>
                          <li>Arabic</li>
                          </ul> 
                      </div>
                 </div>  
             </div>
             <div className={Menu[6]===false ? 'search':'search active-search'}>
                 <div className='search-box'>
                 <div>
                      <input type="text" placeholder='Enter your search...'/>
                 <button><i  className='bi bi-search'></i></button>
             </div>
                 <i className='bi bi-x' onClick={()=> handlMenu(7)}></i> 
                 </div>
                 </div>
             <div className="forns">
                 <div className='mobile'>
                     <i className='bi bi-justify'  onClick={()=> handlMenu(8)} style={{"fontSize":'35px'}}></i>
                 </div>
                 <div>
                     <h2><i className='bi bi-shop orang'></i> FURNS</h2>
                 </div>
                 <div className='icons'>
                     <i className='bi bi-search' onClick={()=> handlMenu(7)}></i>
                     <i className='bi bi-person user desktop'></i>
                     <i className='bi bi-cart4 basket desktop'  onClick={()=> setbasket(!basket)}><span>{basketProducts.length}</span></i>
                     <i className='bi bi-gear mobile'></i>
                     <Link to='/compare' className='link desktop'>
                             <i className='bi bi-arrow-repeat'></i>
                        </Link>
                        <Link to="/wishlist" className='link desktop'>
                           <i className='bi bi-heart'></i>
                           </Link>
                 </div>
             </div>
             <div className="menu">
             <div><Link className='link' to='/'  onClick={()=>setMenu([false,false,false,false,false,false,false,true])}>Home</Link>
            
                      </div>
              <div  onClick={()=>setMenu([false,false,false,false,false,false,false,true])}><Link className='link' to='/about'> About</Link></div>
              <div><span onClick={()=> handlMenu(6)}>Home Furniture <i className={Menu[5]===false ? 'bi bi-chevron-down':'bi bi-chevron-up'}></i></span>
                      <ul className={Menu[5]===false ? 'active':''}>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>POUND</li>
                      <li>FRANC</li>
                      </ul>
                      </div>
             <div><span onClick={()=> handlMenu(3)}>Hospital Furniture <i className={Menu[2]===false ? 'bi bi-chevron-down':'bi bi-chevron-up'}></i></span>
                      <ul className={Menu[2]===false ? 'active':''}>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>POUND</li>
                      <li>FRANC</li>
                      </ul>
                      </div>
             <div><span  onClick={()=> handlMenu(4)}>Office Furniture <i className={Menu[3]===false ? 'bi bi-chevron-down':'bi bi-chevron-up'}></i></span>
                      <ul  className={Menu[3]===false ? 'active':''}>
                          <li>English</li>
                          <li>German</li>
                          <li>Parsian</li>
                          <li>Arabic</li>
                          </ul> 
                      </div> 
              <Link to='/Contact' className='link'  onClick={()=>setMenu([false,false,false,false,false,false,false,true])}>Contant</Link>
             </div>
             <div className={Menu[7]===false ? 'mobile-menu  mobile-menu-active':'mobile-menu'}>
                 <div>
                 <h2><i className='bi bi-shop orang'></i> FURNS</h2>
                  <i className='bi bi-x-lg orang'  onClick={()=> handlMenu(8)}></i>
                 </div>
                <ul>
                     <li onClick={()=>setMenu([false,false,false,false,false,false,false,true])}><Link className='link' to="/">Home</Link></li>
                     <li  onClick={()=>setMenu([false,false,false,false,false,false,false,true])} ><Link className='link' to="/about"> ABOUT</Link></li>
                     <li>HOME FURNITURE</li>
                     <li>OFFICE FURNITURE</li>
                     <li>HOSPITAL FURNITURE</li>
                     <li  onClick={()=>setMenu([false,false,false,false,false,false,false,true])}>CONTACT</li>
                 </ul>
             </div>
             <Routes>
              <Route path="/" element={
                  <div>
                          <div className="main-header">
             <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
                 <div className="box1 box">
                    <img src={process.env.PUBLIC_URL+'/images/slider-1.png'}/>
                    <div>
                         <h3>New Products</h3>
                         <h1>Flexible Chair</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo exercitationem eos. Nobis ex, tempora tenetur doloremque ipsa unde quo?</p>
                         <button>Shop New</button>
                     </div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box2 box">
        <div>
            <h3>New Products</h3>
                         <h1>Flexible Chair</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo exercitationem eos. Nobis ex, tempora tenetur doloremque ipsa unde quo?</p>
                         <button>Shop New</button>
                     </div>
                 <img src={process.env.PUBLIC_URL+'/images/slider-2.png'}/>

                 </div>
        </SwiperSlide>
      </Swiper>

         
             </div>  <div className="bottom-header">
                 <ul>
       
                     <li><img src={process.env.PUBLIC_URL+'/images/75.png'}/>
                     <p>Bedroom</p>
                     </li>
                     <li><img src={process.env.PUBLIC_URL+'/images/76.png'}/>
                     <p>Living</p>
                     </li>
                     <li><img src={process.env.PUBLIC_URL+'/images/77.png'}/>
                     <p>Dining</p>
                     </li>
                     <li><img src={process.env.PUBLIC_URL+'/images/78.png'}/>
                     <p>Lounge</p>
                     </li>
                 </ul>
             </div>  
                  </div>
              } />
             </Routes>
     
             
                
         </div>
    </Fragment> );
}
 
export default Header;