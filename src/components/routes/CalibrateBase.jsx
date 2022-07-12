import React from 'react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from './../Loading.jsx';
import CalTable from './../tables/CalTable.jsx';

const CalibrateBase = () => {
  const [data, setBaseCalData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/BaseCalibrationData')
      .then(res => setBaseCalData([res.data]))
      .catch(err => console.error(err))
  }, []);

  return !data.length ? <Loading /> : (
    <div>
      <h1>Sensor Statistics</h1>
      <CalTable data={data[0]}/>
      <div className="cal-btn-ctr">
        <Link to="/">
          <button className="sc-btn">Return Home</button>
        </Link>
      </div>
    </div>
  );
};

export default CalibrateBase;