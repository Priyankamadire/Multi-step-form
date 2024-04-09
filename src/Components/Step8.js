import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step2.css'; // Import CSS file for Step2
import './MultiStepForm.css'; // Import CSS file for MultiStepForm

const Step8 = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/step7'); // Navigate to the previous step (Step1)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/stepn');
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="filler" style={{ width: '66%' }}></div>
      </div>
      <div className="step">
        <h2>Step 8:Which is your favorite Flowers
</h2>
        <form onSubmit={handleSubmit}>
          <div className="option-container">
            <label>
              <input type="radio" name="flower" value="sun" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.MeGnRQ-wdmvOil3zNo4UrwHaIm&pid=Api&P=0&h=180" alt="panipuri" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Lotus</span>
               
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="flower" value="winter" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.ztY3QpQyFG5SdfY-bhoybwHaEo&pid=Api&P=0&h=180" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Rose</span>
                
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="flower" value="rain" />
              <img src="https://tse2.mm.bing.net/th?id=OIP.3y5D1dB3Q4lry3vPcMZargHaE7&pid=Api&P=0&h=180" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">hibiscus flower</span>
             
            </label>
          </div>
          <div className="option-container">

          <label>
              <input type="radio" name="flower" value="spring" /> 
              <img src="http://4.bp.blogspot.com/-Cp2tiZfIZvw/TglDk6xucLI/AAAAAAAAAWg/Ox1EhOdYOcc/s1600/pink+lily.jpg" alt="veggies" className="option-icon" style={{ width: '20px' }} />
              <span className="black-text">Lilly</span>
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

export default Step8;
