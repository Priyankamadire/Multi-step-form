import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step2.css'; // Import CSS file for Step2
import './MultiStepForm.css'; // Import CSS file for MultiStepForm

const Step6 = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/step5'); // Navigate to the previous step (Step1)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step7');
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="filler" style={{ width: '66%' }}></div>
      </div>
      <div className="step">
        <h2>Step 6:What is your favorite season of the year?
</h2>
        <form onSubmit={handleSubmit}>
          <div className="option-container">
            <label>
              <input type="radio" name="season" value="sun" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.T1FfK4xzTlF5NzfFP7RqhwHaFj&pid=Api" alt="panipuri" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Summer</span>
               
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="season" value="winter" />
              <img src="https://tse4.mm.bing.net/th?id=OIP.uU13qiygmg5_pPhMx3T_WwHaE8&pid=Api&P=0&h=180" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Winter</span>
                
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="season" value="rain" />
              <img src="https://tse3.mm.bing.net/th?id=OIP.Upmy6Bt0opnVDhgzB1EaiQHaD3&pid=Api&P=0&h=180" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Rainy</span>
             
            </label>
          </div>
          <div className="option-container">

          <label>
              <input type="radio" name="season" value="spring" /> 
              <img src="http://getwallpapers.com/wallpaper/full/a/b/9/1163645-cool-spring-season-pictures-wallpapers-1920x1200.jpg" alt="veggies" className="option-icon" style={{ width: '20px' }} />
              <span className="black-text">Spring</span>
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

export default Step6;
