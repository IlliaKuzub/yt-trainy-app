import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID J15zZ-sYHOf_TcMDfNvu45PNJSIwxK179GgVaZlAgps'
    }
});