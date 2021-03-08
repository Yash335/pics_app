import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization:'Client-ID 14i29sF8HjT33DHmUUeQnceDdrkDIjE2FYS-navBjK4'
    }
});
