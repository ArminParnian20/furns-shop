import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
const About = () => {
    return (  <Fragment>
        <div className="about">
            <div className='ad-about'>
                    <h1>ABOUT</h1>
                <h2>Home / ABOUT</h2>
            </div>
            <h1>
            Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer a wide variety of fashion-related content.
            </h1>
            <div className='about-mg'>
            <img  src={process.env.PUBLIC_URL+'/images/s-1.jpg'}/>
            <img  src={process.env.PUBLIC_URL+'/images/s-2.jpg'}/>
            </div>
            <div className="text-about">
                <div>
            <h3>OUR MISSION</h3>

            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
            <h3>OUR STORES</h3>

            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
        </div>
    </Fragment>);
}
 
export default About;