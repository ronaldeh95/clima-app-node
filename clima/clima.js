const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9beeae837b8966c14013cc466f344d17&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}