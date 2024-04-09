import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step2.css'; // Import CSS file for Step2
import './MultiStepForm.css'; // Import CSS file for MultiStepForm

const Step4 = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/step3'); // Navigate to the previous step (Step1)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step5');
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="filler" style={{ width: '66%' }}></div>
      </div>
      <div className="step">
        <h2>Step 4:If you could travel anywhere in the world, where would you go?
</h2>
        <form onSubmit={handleSubmit}>
          <div className="option-container">
            <label>
              <input type="radio" name="travel" value="paries" />
              <img src="https://tse2.mm.bing.net/th?id=OIP.041sE_ht6rqwS0pNPNtXlQHaE-&pid=Api&P=0&h=180" alt="panipuri" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Paries</span>
               
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="travel" value="switzerland" />
              <img src="https://tse4.mm.bing.net/th?id=OIP.Z4pwsGa-is2tMvOw2fHL1AHaEo&pid=Api&P=0&h=180" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Switzer Land</span>
                
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="travel" value="London" />
              <img src="https://www.roadaffair.com/wp-content/uploads/2017/09/london-united-kingdom-shutterstock_193444583.jpg" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">London</span>
             
            </label>
          </div>
          <div className="option-container">

          <label>
              <input type="radio" name="travel" value="series" /> 
              <img src="https://tse4.mm.bing.net/th?id=OIP.cQATOtbfAIR4vNETYKLzCwHaE8&pid=Api&P=0&h=180" alt="veggies" className="option-icon" style={{ width: '20px' }} />
              <span className="black-text">Dubai</span>
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

export default Step4;
