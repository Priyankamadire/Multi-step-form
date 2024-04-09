import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Step1 from '../src/Components/Step1';
import Step2 from '../src/Components/Step2';
import Stepn from '../src/Components/Stepn';
import './App.css';
import Step4 from './Components/Step4';
import Step3 from './Components/Step3';
import Step5 from './Components/Step5';
import Step6 from './Components/Step6';
import Step7 from './Components/Step7';
import Step8 from './Components/Step8';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step5" element={<Step5 />} />
          <Route path="/step6" element={<Step6 />} />
          <Route path="/step7" element={<Step7 />} />
          <Route path="/step8" element={<Step8 />} />


          <Route path="/stepn" element={<Stepn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
