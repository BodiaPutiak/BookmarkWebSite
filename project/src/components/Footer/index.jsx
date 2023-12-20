import logo from '../../assets/images/logo-bookmark-footer.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import NavBar from '../Header/NavBar'

function Footer(){
    return(
        <footer>
            <div className="logo-nav-container">
                <div className="logo-foot">
                    <img src={logo} alt="" /> 
                </div>
                <nav>
                    <NavBar />
                </nav>
            </div>
            <div className='socials'>
                <FontAwesomeIcon icon={faFacebook} color='white'/>
                <FontAwesomeIcon icon={faTwitter} color='white' />
            </div>
        </footer>
    )
}
export default Footer;