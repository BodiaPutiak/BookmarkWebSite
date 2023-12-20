import React, { useState } from 'react';
import './index.scss';
import IllustrationFeaturesTab1 from '../../assets/images/illustration-features-tab-1.svg';
import IllustrationFeaturesTab2 from '../../assets/images/illustration-features-tab-2.svg';
import IllustrationFeaturesTab3 from '../../assets/images/illustration-features-tab-3.svg';
import { Link } from 'react-scroll'
function Features() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const tabs = [
    {
      id: 1,
      image: IllustrationFeaturesTab1,
      title: 'Bookmark in one click',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourites sites.',
      buttonLabel: 'Simple Bookmarking',
    },
    {
      id: 2,
      image: IllustrationFeaturesTab2,
      title: 'Intelligent search',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      buttonLabel: 'Speedy Searching',
    },
    {
      id: 3,
      image: IllustrationFeaturesTab3,
      title: 'Share your bookmarks',
      description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      buttonLabel: 'Easy Sharing',
    },
  ];

  const activeTab = tabs.find((tab) => tab.id === activeButton);

  return (
    <section className="features-section">
      <div className="features-text-container">
        <Link name='features' to='features' />
        <h2>Features</h2>
        <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
      <div className="features-nav-bar">
        {tabs.map((tab) => (
          <div>
            <button
              key={tab.id}
              className={activeButton === tab.id ? 'active' : ''}
              onClick={() => handleButtonClick(tab.id)}
            >
              {tab.buttonLabel}
            </button>
          </div>
        ))}
      </div>

      <div className="carousel-container">
        <div className="tab-container">
          <div className="features-img-container">
            <img src={activeTab.image} alt={`Image for ${activeTab.title}`} />
          </div>
          <div className="features-tab-text-container">
            <h3>{activeTab.title}</h3>
            <p>{activeTab.description}</p>
            <button className="primary-button">More Info</button>
          </div>
        </div>
      </div>
      <div className="rectangle"></div>
    </section>
  );
}

export default Features;
