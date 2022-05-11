// keys for actiontypes
export const ActionTypes = {
  FETCH_WEATHER: 'FETCH_WEATHER',
};

const apiKey = '75cf7b4102c8ecdcf7db3bcb117f088b';

export function fetchWeather(input) {
  const inputVal = input;
  console.log(input);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => { dispatch({ type: ActionTypes.FETCH_WEATHER, payload: data }); console.log('just dispatched data'); })
      .catch((error) => {
      // hit an error do something else!
      });
  };
}
