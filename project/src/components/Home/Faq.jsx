import './index.scss';
import IconArrow from '../../assets/images/icon-arrow.svg';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Faq(){
    const [openQuestionIds, setOpenQuestionIds] = useState([]);

    const handleFaqDropDownButton = (id) => {
        setOpenQuestionIds((prevIds) => {
            if (prevIds.includes(id)) {
                return prevIds.filter((prevId) => prevId !== id);
            } else {
                return [...prevIds, id];
            }
        })
    };

    const faqs = [
        {
            id: 1,
            question: 'What is Bookmark?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi incidunt, iste nisi neque cupiditate ut ad ea est at impedit excepturi libero, delectus possimus consectetur! Aliquam officia quae fugit nihil! Repellat nostrum consectetur minima, dolorem fuga animi labore? Libero sit assumenda vitae numquam at cumque enim placeat quisquam excepturi.'
        }, 
        {
            id: 2,
            question: 'How can I request a new browser?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi incidunt, iste nisi neque cupiditate ut ad ea est at impedit excepturi libero, delectus possimus consectetur! Aliquam officia quae fugit nihil! Repellat nostrum consectetur minima, dolorem fuga animi labore? Libero sit assumenda vitae numquam at cumque enim placeat quisquam excepturi.'
        },
        {
            id: 3,
            question: 'Is there a mobile app?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi incidunt, iste nisi neque cupiditate ut ad ea est at impedit excepturi libero, delectus possimus consectetur! Aliquam officia quae fugit nihil! Repellat nostrum consectetur minima, dolorem fuga animi labore? Libero sit assumenda vitae numquam at cumque enim placeat quisquam excepturi.'
        },
        {
            id: 4,
            question: 'What about other Chromium browsers?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi incidunt, iste nisi neque cupiditate ut ad ea est at impedit excepturi libero, delectus possimus consectetur! Aliquam officia quae fugit nihil! Repellat nostrum consectetur minima, dolorem fuga animi labore? Libero sit assumenda vitae numquam at cumque enim placeat quisquam excepturi.'
        },
    ]
    
    return (
        <section className="faq-section">
            <div className="faq-text-container">
                <Link name='faq' to='faq' />
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>
            <div className="faqs-container">
                {faqs.map((faq) => (
                    <div className="question-and-answer-container" key={faq.id}>
                        <div className="question" onClick={() => handleFaqDropDownButton(faq.id)}>
                            {faq.question}
                            <img className={`${openQuestionIds.includes(faq.id) ? 'turned-arrow' : ''}`}  src={IconArrow} alt="" />
                        </div>
                        <div className={`answer ${openQuestionIds.includes(faq.id) ? 'show' : ''}`}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
                <button className="primary-button">
                    More Info
                </button>
            </div>
        </section>
    )
}
export default Faq;