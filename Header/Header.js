import React, {useState} from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800){
      return { right: !menuOpened && "-100%"}
    }
  }
  
  return (
    <header className='header'>
      <div className='header-container'>
        <a href='/'>
          <img src={logo} alt="logo" width={100} />
        </a>   
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >    
          <nav className={`header-menu ${menuOpened ? 'h-menu' : ''}`}>
            <ul>
              <li><a href='#residences'>Résidences</a></li>
              <li><a href='/Vente'>Location</a></li>
              <li><a href='/location'>Vente</a></li>
              <li><a href='/Contactez-Nous'>Contact</a></li>
            </ul>
          </nav>
        </OutsideClickHandler>
      </div>
      <div className='menu-icon' onClick={() => setMenuOpened(prev => !prev)}>
        <BiMenuAltRight size={30} />
      </div>
    </header>
  );
};

export default Header;

