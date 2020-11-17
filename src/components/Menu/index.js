import React from 'react';
import './index.scss';

const Menu = ({order}) => {
    const currentClass = `menu-box ${order}`
    let aboutTag = order === 'first-menu'? 'home' : 'about'
    return (
        <div id={aboutTag} className='menu-container'>
            <div className={currentClass}>
                <nav>
                    <ul className='menu-ul'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='#about'>About me</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu;