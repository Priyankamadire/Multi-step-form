import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step2.css'; // Import CSS file for Step2
import './MultiStepForm.css'; // Import CSS file for MultiStepForm

const Step3 = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/step2'); // Navigate to the previous step (Step1)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step4');
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="filler" style={{ width: '66%' }}></div>
      </div>
      <div className="step">
        <h2>Step 3:What is your favorite movie or TV show?</h2>
        <form onSubmit={handleSubmit}>
          <div className="option-container">
            <label>
              <input type="radio" name="show" value="biggboss" />
              <img src="https://keralakaumudi.com/web-news/en/2023/02/NMAN0393746/image/bigg-boss-5.1.2037709.jpg" alt="panipuri" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Bigg boss</span>
               
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="show" value="match" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.Ddjj9lWZOJxjBWXrArWm7QHaKW&pid=Api&P=0&h=180" alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Match</span>
                
            </label>
          </div>
          <div className="option-container">
            <label>
              <input type="radio" name="show" value="movie" />
              <img src="https://img.freepik.com/premium-vector/cinema-logo-vector-roll-film-vector-white-background_472355-306.jpg?w=2000 " alt="biryani" className="option-icon" style={{ width: '20px',borderRadius: '50%'}} />
              <span className="black-text">Movies</span>
             
            </label>
          </div>
          <div className="option-container">

          <label>
              <input type="radio" name="show" value="series" /> 
              <img src="https://img-new.cgtrader.com/items/1952885/6d3a44ef7b/music-logo-3d-model-obj-mtl-3ds-fbx-dae-skp.jpg" alt="veggies" className="option-icon" style={{ width: '20px' }} />
              <span className="black-text">Songs</span>
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

export default Step3;
