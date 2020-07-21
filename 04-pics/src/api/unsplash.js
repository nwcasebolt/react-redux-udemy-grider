import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID AQycZV7k9t5wSKEY6Xf8iZHxDcFZAOAHnPK9kfU-efQ'
    }
});