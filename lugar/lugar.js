const axios = require('axios');

const getLugar = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+"${ encodedUrl }"?json=1`,
        auth: '749382913620107254010x76965'
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data1 = resp.data.standard;
    const direccion = data1.city;
    const lat = resp.data.latt;
    const lng = resp.data.longt;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugar
}