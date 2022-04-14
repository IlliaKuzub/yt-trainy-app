import axios from 'axios';

const KEY = 'AIzaSyAwaBRo7R_9k-JfnuojmotJzKMtysIyQJw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
        q: 'surfboards'
    }
});