import axios from "axios";

export const domain ="http://backend:5000"


const http = axios.create ({
  baseURL: `${domain}/api`,
  headers: {'Content-Type': 'application/json'},
});


export default http;