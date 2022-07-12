import React from 'react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading.jsx';
import Table from './Table.jsx';

const CalibrateSensors = () => {
  const [data, setSensorCalData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/SensorCalibrationData')
      .then(res => setSensorCalData([res.data]))
      .catch(err => console.error(err))
  }, []);

  return !data.length ? <Loading /> : (
    <div>
      <h1>Sensor Statistics</h1>
      <Table data={data[0]}/>
      <div className="cal-btn-ctr">
        <Link to="/calibrate-sensor/output" state={data[0]}>
          <button className="sc-btn">Generate Output</button>
        </Link>
        <Link to="/">
          <button className="sc-btn">Return Home</button>
        </Link>
      </div>
    </div>
  );
};

export default CalibrateSensors;