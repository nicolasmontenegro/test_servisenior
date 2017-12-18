import axios from 'axios'

const SiteAxios = axios.create({
  baseURL: 'http://rem-rest-api.herokuapp.com/api/'
});

export default SiteAxios