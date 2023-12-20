import { useState } from "react";
import ErrorIcon from '../../assets/images/icon-error.svg'

function Form() {
    const [email, setEmail ] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const validationError = validateEmail(email);
        setError(validationError);
    
        if (!validationError) {
          console.log("Whoops, make sure it's an email", email);
        }
      };
    
      const validateEmail = (value) => {
        if (!value.trim()) {
          return 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          return "Whoops, make sure it's an email";
        }
        return '';
      };

      console.log(error)
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input 
                    onChange={handleInputChange} 
                    value={email} 
                    placeholder="Enter your email adres" 
                    type="text" 
                    id="email"
                    name="email" 
                />
                {error && <div className="error">
                  {error}
                  <img src={ErrorIcon} alt="" />
                </div>}
            </div>
            <button type="submit">Contact Us</button>
        </form>
    )
}

export default Form;