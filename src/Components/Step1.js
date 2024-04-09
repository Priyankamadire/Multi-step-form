import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { FaRegCircle } from 'react-icons/fa';
import './Step1.css'; // Import CSS file for Step1
import './MultiStepForm.css'; // Import CSS file for MultiStepForm

const Step1 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step2');
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="filler" style={{ width: '33%' }}></div>
      </div>
      <div className="step-container">
        <div>
          <h2 className="step-title">Step 1: What is your favorite color?</h2>
          <form onSubmit={handleSubmit}>
            <div className="option-container">
              <label className="radio-label">
                <input type="radio" name="color" value="black" className="radio-input " />
                <div className='bi bi-circle-fill'> Black</div>
              </label>
            </div>
            <div className="option-container">
              <label className="radio-label">
                <input type="radio" name="color" value="blue" className="radio-input" />
                <div className='bi bi-circle-fill blue-circle'>
                 Blue</div>
              </label>
            </div>
            <div className="option-container">
              <label className="radio-label">
                <input type="radio" name="color" value="orange" className="radio-input" />
                <div className='bi bi-circle-fill orange-circle'>Orange</div>
              </label>
            </div>
            <div className="option-container">
              <label className="radio-label">
                <input type="radio" name="color" value="purple" className="radio-input" />
                <div className='bi bi-circle-fill purple-circle'>
               Purple
              </div>
              </label>
            </div>
            <button type="submit" className="submit-button">Next</button>
          </form>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Step1;
