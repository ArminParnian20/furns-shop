import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import {Swiper,SwiperSlide} from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css'
import SwiperCore, {Pagination} from 'swiper';

import "../../node_modules/swiper/swiper.min.css";
const LastNews = () => {
    return ( <Fragment>
        <div className="lastNews">
            <div>
        <h1>Last News</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ad sit deleniti.</p> 
            </div>
        <div className='mobile'>
  <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <div className='slide'>
                  <img src={process.env.PUBLIC_URL+'/images/n-1.jpg'}/>
                  <div>
                       <h2>Eiumod tempor incididunt labore</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero rem aperiam esse soluta eligendi? Nam earum aspernatur laborum sed debitis, ratione placeat ullam aperiam, minus repellendus odio iusto saepe ex possimus inventore quod dolores dolorum odit. Quaerat, deleniti sint?
                    </p> 
                    <button className='go-all'>
                 Read More
             </button>
                  </div>
                  

            </div>
                  
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide'>
                     <img src={process.env.PUBLIC_URL+'/images/n-2.jpg'}/>
                     <div>
                          <h2>Ut enim adminim veniam</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero rem aperiam esse soluta eligendi? Nam earum aspernatur laborum sed debitis, ratione placeat ullam aperiam, minus repellendus odio iusto saepe ex possimus inventore quod dolores dolorum odit. Quaerat, deleniti sint?
                    </p>  
                    <button className='go-all'>
                 Read More
             </button> 
                     </div>
              
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide'>
 <img src={process.env.PUBLIC_URL+'/images/n-3.jpg'}/>
 <div>
      <h2>Spatialize with that the furns</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero rem aperiam esse soluta eligendi? Nam earum aspernatur laborum sed debitis, ratione placeat ullam aperiam, minus repellendus odio iusto saepe ex possimus inventore quod dolores dolorum odit. Quaerat, deleniti sint?
                    </p>
                    <button className='go-all'>
                 Read More
             </button>
 </div>
                
            </div>
                
        </SwiperSlide>
      </Swiper>  
        </div>
   <div className='desktop'>
            <ul>
                <li>
                <div className='slide'>
                  <img src={process.env.PUBLIC_URL+'/images/n-1.jpg'}/>
                  <div>
                       <h2>Eiumod tempor incididunt labore</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero rem aperiam esse soluta eligendi? Nam earum aspernatur laborum sed debitis, ratione placeat ullam aperiam, minus repellendus odio iusto saepe ex possimus inventore quod dolores dolorum odit. Quaerat, deleniti sint?
                    </p> 
                    <button className='go-all'>
                 Read More
             </button>
                  </div>
            </div>
                </li>
                <li>
                <div className='slide'>
                     <img src={process.env.PUBLIC_URL+'/images/n-2.jpg'}/>
                     <div>
                          <h2>Ut enim adminim veniam</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero rem aperiam esse soluta eligendi? Nam earum aspernatur laborum sed debitis, ratione placeat ullam aperiam, minus repellendus odio iusto saepe ex possimus inventore quod dolores dolorum odit. Quaerat, deleniti sint?
                    </p>   
                    <button className='go-all'>
                 Read More
             </button>
                     </div>
              
            </div>
                </li>
                <li>
                <div className='slide'>
                 <img src={process.env.PUBLIC_URL+'/images/n-3.jpg'}/>
              <div>
              <h2>Spatialize with that the furns</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero rem aperiam esse soluta eligendi? Nam earum aspernatur laborum sed debitis, ratione placeat ullam aperiam, minus repellendus odio iusto saepe ex possimus inventore quod dolores dolorum odit. Quaerat, deleniti sint?
                    </p>
                    <button className='go-all'>
                 Read More
             </button>
                    </div>
                
            </div>
                </li>
               </ul>
   </div>
        </div>
 
    </Fragment> );
}
 
export default LastNews;