import axios from 'axios' 

const communityServerApiConfig = {
    baseURL: process.env.VUE_APP_SERVER_API_END_POINT
  };

const serverApi = axios.create(communityServerApiConfig)

export default serverApi