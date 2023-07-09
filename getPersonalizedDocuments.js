import fs from 'fs'
import { BASE_API } from './endpoints.js';
import axios from 'axios'
import 'dotenv/config.js'

const headers = {
  headers: { Authorization: `Bearer ${process.env.TURTL_TOKEN}` },
};

export const getData = async (endpoint) => {
    try {
      const res = await axios.get(endpoint, headers);
      console.log(res.status);
      const data = JSON.stringify(res.data.items);
      fs.writeFile("./personalizationData.json", data, (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  
const data = await getData(`${BASE_API}/personalizations`)
console.log(data)