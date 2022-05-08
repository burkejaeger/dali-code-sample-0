import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink, useParams,
} from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
// import Counter from './counter';
// import Controls from './control';

function About(props) {
  return <div> All there is to know about me </div>;
}
function Welcome(props) {
  return (
    <div>
      <section className="city-search-banner">
        <form className="search-form">
          <div className="app-name">
            Weather App
          </div>
          <div className="city-search-input">
            <TextField variant="standard" type="text" label="Search for a city" />
            <Button variant="contained" endIcon={<SearchRounded />} size="large">SUBMIT</Button>
            <span className="msg" />
          </div>
        </form>
      </section>
      <section className="cities-section">
        <ul className="cities-list" />
      </section>
    </div>
  );
}

function App(props) {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
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
        <li><NavLink to="/" exact="true">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
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
