// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  FETCH_WEATHER: 'FETCH_WEATHER',
};

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}

const apiKey = '75cf7b4102c8ecdcf7db3bcb117f088b';

export function fetchWeather(input, list) {
  const inputVal = input;
  console.log(input);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  return (dispatch) => fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const {
        main, name, sys, weather,
      } = data;
      console.log('data');
      console.log(data);
      const icon = `https://openweathermap.org/img/wn/${
        weather[0].icon
      }@2x.png`;
      console.log(weather);
      console.log(name);
      console.log(sys);
      console.log(main);
      console.log(icon);

      return (data);

      // do something with response.data  (some json)
    })
    .catch((error) => {
      // hit an error do something else!
    });
}
