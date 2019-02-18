import axios from 'axios';

const KEY = 'AIzaSyAKd_OQIfkulNF2Gf3_I3k1iJJ_AO0kTZA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});