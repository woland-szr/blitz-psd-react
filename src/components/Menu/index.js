import React from 'react';
import './index.scss';

const Menu = ({section}) => {

    let [menuStatus, setMenu] = React.useState(false);  

    const toggleMenu = () => {
        if (menuStatus) {
            document.querySelector('ul').style.display = 'none'
            setMenu(false)
        }
        else {
            document.querySelector('ul').style.display = 'block'
            setMenu(true)
      }

    }

    return (
        <div id={section}>
                <nav className='menu-box'>
                    <div className='menu-mobile' onClick={toggleMenu}>&#8734; menu</div>
                    <ul className='menu-ul'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='#about'>About me</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Menu;