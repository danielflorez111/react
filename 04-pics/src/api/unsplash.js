import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 87dd3ac464352ee1d30ae2091b5c81acd051e41b411c6b2a4d1411595bdb90b5'
    }
});