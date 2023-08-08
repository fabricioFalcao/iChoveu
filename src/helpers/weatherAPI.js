const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const result = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`);
  const data = await result.json();
  if (!data.length) {
    window.alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`);
  const data = await result.json();
  const {
    location: { name, country },
    current: {
      temp_c: temp,
      condition: { text: condition, icon },
    },
  } = await data;
  return ({
    name,
    country,
    temp,
    condition,
    icon,
    url: cityURL,
  });
};
