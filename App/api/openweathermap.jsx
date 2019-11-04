var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=d8e520361c0e7c6c358bfa9c7c2598bb&units=imperial';

module.exports = {
    getTemp: function (location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(response){
            if(response.data.cod && response.data.message){
                throw new Error(response.data.message);
            }
            else{
                return response.data.main.temp;
            }
        },
            function (response) {
                throw new Error(response.data.message);
            })
    }
};

// d8e520361c0e7c6c358bfa9c7c2598bb