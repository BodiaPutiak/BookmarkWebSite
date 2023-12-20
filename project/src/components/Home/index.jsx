import './index.scss';
import Hero from './Hero';
import Features from './Features';
import Download from './Download';
import Faq from './Faq';
import ContactUs from './ContactUs';
import PopUp from './PopUp';


function HomePage(){
    return (
        <main>
            <PopUp />
            <Hero />
            <Features />
            <Download />
            <Faq />
            <ContactUs />
        </main>
    )
}
export default HomePage;