import React from 'react';
import './index.scss';

const About = () => {
    return (
        <section className='about'>
            <div className='about-block'>
                <img className='photo' src='./photo.jpg' alt='Me' />
                <div className='about-me'>
                    <h1 className='about-me__title'>about me</h1>
                    <p><span className='about-me__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </span></p>
                    <p><span className='about-me__name'>Jason Wood</span></p>
                </div>
            </div>
            <div className='scroll'>
                <p>keep scrolling, there is still more to come.</p>
                <a href='#portfolio'><img src='./arrgrey.png' alt='Portfolio '/></a>
            </div>
        </section>
    )    
}

export default About;