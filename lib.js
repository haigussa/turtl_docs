import fs from "fs";
import axios from "axios";
import "dotenv/config";
import Papa from "papaparse";
import {BASE_API} from './endpoints.js'

const bearer_authorization = `Authorization: Bearer ${process.env.TURTL_TOKEN}`;
// export const BASE_API = "https://careers.turtl.co/api/v1";


export const readCSVAsync = async (fileLocation) => {
  try {
    const data = await fs.promises.readFile(fileLocation, "utf-8");
    const csvData = Papa.parse(data, {
      delimiter: ",",
      header: true,
      skipEmptyLines: false,
    });
    return csvData.data;
  } catch (error) {
    console.error(
      `Something went wrong while reading from ${fileLocation}`,
      error
    );
  }
};

export const createdPersonalizedDocument = async (docId, docUrl, docData) => {
  try {
    const payload = {
      bearer_authorization,
      docId,
      docUrl,
      fields: {
        name: docData.name,
        company: docData.company,
        sector: docData.sector,
        "logo-domain": new URL(docData.logo).hostname,
      },
    };
    return await axios.post(`${BASE_API}/personalizations`, payload);
  } catch (err) {
    return err;
  }
};
