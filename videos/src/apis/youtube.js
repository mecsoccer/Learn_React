import axios from 'axios';

const KEY = 'AIzaSyDIyIuP9V0W9U3MIIW9L04kyFJuVhB6Jtg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});