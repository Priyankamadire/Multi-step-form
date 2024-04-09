import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step2.css'; // Import CSS file for Step2
import './MultiStepForm.css'; // Import CSS file for MultiStepForm

const Step2 = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/'); // Navigate to the previous step (Step1)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step3');
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="filler" style={{ width: '66%' }}></div>
      </div>
      <div className="step">
        <h2>Step 2: What is your favorite food?</h2>
        <form onSubmit={handleSubmit}>
          <div className="option-container">
            <label>
              <input type="radio" name="food" value="panipuri" />
              <img src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/04/pani_puri1.jpg " alt="panipuri" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Panipuri</span>
               
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="food" value="biryani" />
              <img src="https://tse3.mm.bing.net/th?id=OIP.3D9RGk6WpkIuxRs9meFmVAHaGL&pid=Api&P=0&h=180" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Biryani</span>
                
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="food" value="dal" />
              <img src="https://tse3.mm.bing.net/th?id=OIP.nsapv4aiFwUPm_lYYf1dTQAAAA&pid=Api&P=0&h=180 " alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Egg curry</span>
             
            </label>
          </div>
          <div className="option-container">

          <label>
              <input type="radio" name="food" value="veggies" /> 
              <img src="http://upload.wikimedia.org/wikipedia/commons/0/0b/Whole_onion.jpg" alt="veggies" className="option-icon" style={{ width: '20px' }} />
              <span className="black-text">Veggies</span>
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

export default Step2;
