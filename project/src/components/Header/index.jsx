import './index.scss'
import NavBar from './NavBar';
import MobileNav from './MobileNav'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/images/logo-bookmark.svg';
import XMark from '../../assets/images/icon-close.svg';
import BurgerMenu from '../../assets/images/icon-hamburger.svg';
import MobileLogo from '../../assets/images/logo-bookmark-mobile-nav.svg'
import { usePopUp } from '../../context/PopUpContext';

function Header(){
    const [open, setOpen] = useState(false);
    const { handleLogoHover } = usePopUp();

    const handleBurgerMenuButton = () => {
        setOpen(!open);
    };

    const closeMobileNavBar = () => {
        setOpen(false);
    };
    return (
        <header>
            <div className='nav-container'>
                <Link className={`logo ${open ? 'hide' : ''}`}>
                    <img onMouseOver={() => handleLogoHover()} src={Logo} alt="Bookmark Logo" />
                </Link>

                <nav className={'nav-bar'}>
                    <NavBar />
                    <button>LOGIN</button>
                </nav>
                <div className={`${open ? 'hide' : ''}`}>
                    <button onClick={handleBurgerMenuButton}>
                        <img className='burger-menu' src={BurgerMenu} />
                    </button>
                </div>

                
                <nav className={`mobile-nav-bar ${open ? 'show' : ''}`}>
                    <div className="logo-cross-container">
                        <img className='mobile-logo' src={MobileLogo} alt="" />
                        <NavLink className='cross' onClick={() => {handleBurgerMenuButton()}}>
                            <img src={XMark} alt="Close icon" />
                        </NavLink >
                    </div>
                    <MobileNav closeMobileNavBar={closeMobileNavBar}/>
                </nav>
            </div>
        </header>
    )
}
export default Header;