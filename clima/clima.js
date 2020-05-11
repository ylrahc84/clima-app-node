const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5f5365f588cbad56ec7946242a351f30&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}