import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import { fetchWeather } from '../actions';
// import { TextField } from '@mui/material';
// const form = document.querySelector('.top-banner form');
// const input = document.querySelector('.city-input');
// const msg = document.querySelector('.top-banner .msg');
// const list = document.querySelector('.cities-list');

function mapStateToProps(reduxState) {
  console.log('reduxState');
  console.log(reduxState);
  return {
    current: reduxState,
    submitted: false,
  };
}

class Citysearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentsearch: '',
    };
  }

  componentDidMount() {
    console.log('mounting');
    console.log(this.props);
    if (this.props.current.weatherSearch) {
      console.log('successful fetch');
    }
  }

  onInputChange = (event) => {
    this.setState({ currentsearch: event.target.value });
  };

  onSubmit = (event) => {
    console.log('current search city:');
    console.log(this.state.currentsearch);
    event.preventDefault();
    this.props.fetchWeather(this.state.currentsearch);
    // eslint-disable-next-line no-unused-expressions
    mapStateToProps();
    // this.setState({ weather: this.props.weather });
    console.log('here');
    console.log(this.props);
    this.setState({ submitted: true });
  };

  /*
this.setState({
          name: this.props,
          country: this.props,
          icon: this.props,
          temp: this.props,
        });
        console.log(this.state.name);
        console.log(this.state.country);
        console.log(this.state.icon);
        console.log(this.state.temp);
      }
    })
  */

  render() {
    return (
      <div>
        <section className="city-search-banner">
          <form className="search-form">
            <div className="app-name">
              Weather App
            </div>
            <div className="city-search-input">
              <TextField variant="standard" type="text" label="Search for a city" className="city-input" onChange={this.onInputChange} value={this.currentsearch} />
              <Button variant="contained" size="large" onClick={this.onSubmit}>SUBMIT</Button>
              <span className="msg" />
            </div>
          </form>
        </section>

        {this.state.submitted ? (
          <Card className="weather-card">
            <div>
              {this.props.current.weatherSearch.weather.weather ? (
                <div>
                  <div className="location-wrapper">
                    <div className="weather-city">{this.props.current.weatherSearch.weather.name}</div>
                    <div className="weather-country">{this.props.current.weatherSearch.weather.sys.country}</div>
                  </div>
                  <div className="weather-card-temp">{Math.round(this.props.current.weatherSearch.weather.main.temp)}&deg;C</div>
                  <img className="weather-card-icon" alt="weather icon" src={`https://openweathermap.org/img/wn/${this.props.current.weatherSearch.weather.weather[0].icon}@2x.png`} />
                </div>
              ) : null}
            </div>
          </Card>
        ) : null}
      </div>

    );
  }
}

export default connect(mapStateToProps, { fetchWeather })(Citysearch);
