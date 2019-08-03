import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 96b39a42fe2a8023ecf222bc44a8bbe74ee3e53b97f91cfbeb4ddabc1a24ee0c'
    }
});