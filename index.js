const baseURL = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=';

var cityName = '';

var button = document.getElementById('submit');

var concentrations = [];

button.addEventListener('click' , getResults = async () => {
    
    cityName = document.getElementById('city-name').value;

    const res = await fetch(`${baseURL}${cityName}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ee8a416730msh6f8369968a2ff0cp1950b9jsnd0fbc76db09a',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
      },
    });
  
    const data = await res.json();

    const {CO , NO2 ,O3, SO2 , PM10, overall_aqi} = data;

    console.log(CO.concentration);
    console.log(NO2.concentration);
    console.log(O3.concentration);
    console.log(SO2.concentration);
    console.log(PM10.concentration);
    
    console.log(overall_aqi);

    document.getElementById('city').innerText = `${cityName.toUpperCase()} air quality report`
    document.getElementById('aqi').innerText = overall_aqi;
    document.getElementById('co-p').innerText = `  :  ${CO.concentration}`;
    document.getElementById('no2-p').innerText = ` : ${NO2.concentration}`;
    document.getElementById('so2-p').innerText = ` : ${SO2.concentration}`;
    document.getElementById('o3-p').innerText = `  :  ${O3.concentration}`;
    document.getElementById('pm-p').innerText = ` : ${PM10.concentration}`;
}
);



