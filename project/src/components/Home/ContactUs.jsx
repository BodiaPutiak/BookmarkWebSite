import './index.scss'
import NumberCounter from './Counter';
import Form from './Form';
import { Link } from 'react-scroll'


function ContactUs(){
    
    return (
        <section className='contact-section'>
            <NumberCounter />
            <h2>Stay up-to-date what<br/> we're doing</h2>
            <Form />
            <Link name='contact' to='contact' />
        </section>
    )
}
export default ContactUs;