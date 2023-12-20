import './index.scss';
import ChromeImg from '../../assets/images/logo-chrome.svg';
import FirefoxImg from '../../assets/images/logo-firefox.svg';
import OperaImg from '../../assets/images/logo-opera.svg';
import BgDottedLine from '../../assets/images/bg-dots.svg'
function Download(){
    
    return (
        <section className="download-section">
            <div className="download-text-container">
                <h2>Download the extension</h2>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            </div>
            <div className="grid-container">
                <div className="card">
                    <img src={ChromeImg} alt="Chrome Logo" />
                    <h3>Add to Chrome</h3>
                    <p>Minimum version 62</p>
                    <img src={BgDottedLine} alt="" />
                    <button className="primary-button">
                        Add & Install Extension
                    </button>
                </div>
                <div className="card two">
                    <img src={FirefoxImg} alt="FireFox Logo" />
                    <h3>Add to Firefox</h3>
                    <p>Minimum version 55</p>
                    <img src={BgDottedLine} alt="" />
                    <button className="primary-button">
                        Add & Install Extension
                    </button>
                </div>
                <div className="card three">
                    <img src={OperaImg} alt="Opera Logo" />
                    <h3>Add to Opera</h3>
                    <p>Minimum version 46</p>
                    <img src={BgDottedLine} alt="" />
                    <button className="primary-button">
                        Add & Install Extension
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Download;