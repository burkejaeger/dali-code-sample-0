import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
// import { TextField } from '@mui/material';
// const form = document.querySelector('.top-banner form');
// const input = document.querySelector('.city-input');
// const msg = document.querySelector('.top-banner .msg');
// const list = document.querySelector('.cities-list');

function mapStateToProps(reduxState) {
  return {
    weather: reduxState.data,
  };
}

class Citysearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentsearch: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ currentsearch: event.target.value });
  };

  onSubmit = (event) => {
    console.log(this.state.currentsearch);
    event.preventDefault();
    this.props.fetchWeather(this.state.currentsearch);
    console.log('props:');
    console.log(this.props.weather);
  };

  render() {
    return (
      <section className="city-search-banner">
        <form className="search-form">
          <div className="app-name">
            Weather App
          </div>
          <div className="city-search-input">
            <input variant="standard" type="text" label="Search for a city" className="city-input" onChange={this.onInputChange} value={this.currentsearch} />
            <Button variant="contained" size="large" onClick={this.onSubmit}>SUBMIT</Button>
            <span className="msg" />
          </div>
        </form>
      </section>
    );
  }
}

export default connect(mapStateToProps, { fetchWeather })(Citysearch);
