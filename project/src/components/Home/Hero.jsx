import './index.scss';
import HeroImage from '../../assets/images/illustration-hero.svg';


function Hero(){
    
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="button-container">
                    <button className='primary-button'>
                        Get it on Chorme
                    </button>
                    <button className='secondary-button'>
                        Get it on Firefox
                    </button>
                </div>
            </div>
            <div className="hero-img">
                <img src={HeroImage} alt="Hero image" />
                <div className="rectangle"></div>
            </div>
        </section>
    )
}
export default Hero;