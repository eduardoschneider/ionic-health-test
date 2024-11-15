import axios from 'axios';
import md5 from 'md5';

const privateKey = '779a756b8ee8b15a3794b6157248d3154bab4978';
const publicKey = '97d7ad971f04e4660c416472f846f4ff';

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const MarvelApi = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: time,
    apikey: publicKey,
    hash
  }
});

export default MarvelApi;
