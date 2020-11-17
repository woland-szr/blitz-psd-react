import React from 'react';
import './index.scss';

const Home = () => {
    return (
        <section className='home'>
            <div className='home__container'>
                <div className='scroll'>
                    <p>sroll down to see more</p>
                    <a href='#about'><img src='./arrwhite.png' alt='About me'/></a>
                </div>
            </div>
        </section>
    )
}

export default Home;