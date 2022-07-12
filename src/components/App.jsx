import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import CalibrateSensors from './routes/CalibrateSensors.jsx';
import CalibrateOutput from './routes/CalibrateOutput.jsx';
import CalibrateBase from './routes/CalibrateBase.jsx';
import Search from './routes/Search.jsx';


const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calibrate-sensor" element={<CalibrateSensors />} />
        <Route path="/calibrate-sensor/output" element={<CalibrateOutput />} />
        <Route path="/calibrate-base" element={<CalibrateBase />} />
        <Route path="/validate-system" element={<div>validate system</div>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;