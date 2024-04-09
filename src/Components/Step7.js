import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step2.css'; // Import CSS file for Step2
import './MultiStepForm.css'; // Import CSS file for MultiStepForm

const Step7 = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/step6'); // Navigate to the previous step (Step1)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step8');
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="filler" style={{ width: '66%' }}></div>
      </div>
      <div className="step">
        <h2>Step 7:Which languange would you linke to preger more
</h2>
        <form onSubmit={handleSubmit}>
          <div className="option-container">
            <label>
              <input type="radio" name="lang" value="sun" />
              <img src="https://static.vecteezy.com/system/resources/previews/000/533/141/original/beautiful-print-on-bold-font-alphabets-for-kids-part-1-vector.jpg" alt="panipuri" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">English</span>
               
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="lang" value="winter" />
              <img src="https://as2.ftcdn.net/v2/jpg/05/10/00/05/1000_F_510000596_mFK63jTr6mZ12oIYVsbtJfykA7qlyOW6.jpg" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Hindi</span>
                
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="lang" value="rain" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.78Ne_7lv0D6TanGPBPTrOQHaHa&pid=Api&P=0&h=180" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Telugu</span>
             
            </label>
          </div>
          <div className="option-container">

          <label>
              <input type="radio" name="lang" value="spring" /> 
              <img src="https://i.ytimg.com/vi/mc1H16O3IJw/maxresdefault.jpg" alt="veggies" className="option-icon" style={{ width: '20px' }} />
              <span className="black-text">Tamil</span>
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

export default Step7;
