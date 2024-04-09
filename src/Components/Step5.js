import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step2.css'; // Import CSS file for Step2
import './MultiStepForm.css'; // Import CSS file for MultiStepForm

const Step5 = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/step4'); // Navigate to the previous step (Step1)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step6');
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="filler" style={{ width: '66%' }}></div>
      </div>
      <div className="step">
        <h2>Step 5:What is your favorite book ?
</h2>
        <form onSubmit={handleSubmit}>
          <div className="option-container">
            <label>
              <input type="radio" name="book" value="paries" />
              <img src="https://tse3.mm.bing.net/th?id=OIP.2GMxAqCpItxai1LYbPlmJwAAAA&pid=Api&P=0&h=180" alt="panipuri" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">To Kill a Mockingbird</span>
               
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="book" value="switzerland" />
              <img src="https://tse4.mm.bing.net/th?id=OIP.P1hfBfyKdnmO2R82Ow3lewHaLH&pid=Api&P=0&h=180" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">The Great Gatsby</span>
                
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="book" value="London" />
              <img src="https://image.tmdb.org/t/p/original/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Harry Potter and the Philosopher's Stone</span>
             
            </label>
          </div>
          <div className="option-container">

          <label>
              <input type="radio" name="book" value="series" /> 
              <img src="https://tse1.mm.bing.net/th?id=OIP.Kzm6dBMqx1AE4CiAJ6UotQHaMg&pid=Api&P=0&h=180" alt="veggies" className="option-icon" style={{ width: '20px' }} />
              <span className="black-text">The Catcher in the Rye</span>
            </label>
          </div>
          <div className="button-container">
            <button type="button" className="prev-button" onClick={handlePrev}>
              Previous
            </button>
            <button type="submit" className="submit-button">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step5;
