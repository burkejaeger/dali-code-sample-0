import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink, useParams,
} from 'react-router-dom';
import Card from '@mui/material/Card';

import Citysearch from './citysearch';
// import Counter from './counter';
// import Controls from './control';

function FutureRelease(props) {
  return (
    <Card className="future-release-card">
      <div className="future-release">Future Release: WeatherNow 2.0 </div>
      <div className="description-2"> Coming Soon: APIs for Music Streaming and Amazon Browsing.
        WeatherNow 2.0 will include widgets for finding appropriate music
        and equipment to prepare for travel in all weather conditions
      </div>
    </Card>
  );
}
function WeatherNowBasic(props) {
  return (
    <div>
      <Citysearch />
    </div>
  );
}

function App(props) {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<WeatherNowBasic />} />
          <Route path="/about" element={<FutureRelease />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </Router>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact="true">Basic</NavLink></li>
        <li><NavLink to="/about">Coming Soon</NavLink></li>
      </ul>
    </nav>
  );
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

export default App;
