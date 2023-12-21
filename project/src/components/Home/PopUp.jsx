import './index.scss'
import { useState, useEffect } from 'react';
import IllustrationFeatureTab2 from '../../assets/images/illustration-features-tab-2.svg'
import { usePopUp } from '../../context/PopUpContext';

function PopUp(){
    const { openPopUp, handleCloseButton } = usePopUp();
    return (
        <div onClick={handleCloseButton} className={`window ${openPopUp ? 'show' : ''}`}>
            <div className="pop-up-container">
                <div className="pop-up-img-container">
                    <img src={IllustrationFeatureTab2} alt="" />
                    <div className='rectangle'></div>
                </div>
                <div className="pop-up-text-container">
                    <h2>Intelligent Search</h2>
                    <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                </div>
            </div>    
        </div>
    )
}   
export default PopUp;