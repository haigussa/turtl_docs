import fs from "fs";
import "dotenv/config";
import { createdPersonalizedDocument, readCSVAsync } from "./lib.js";
const DOC_ID = "64a7e883109059c1be4e15ae";
const DOC_URL = "https://careers.turtl.co/story/64a7e883109059c1be4e15ae/";

const createPersonalizationFromCSVFile = async (csvLocation) => {
  const date = Date.now();
  const writeStream = fs.createWriteStream(`./output/data_${date}.csv`);
  console.log(date.now);
  writeStream.write(`name\tcompany\tlogo\tsector\tstatus\n`);

  const csvData = await readCSVAsync(csvLocation);
  for (let i = 0; i < csvData.length; i++) {
    let docData = csvData[i];
    try {
      const response = await createdPersonalizedDocument(
        DOC_ID,
        DOC_URL,
        docData
      );
      const fields = response.data.fields;
      writeStream.write(
        `${fields.name}\t${fields.company}\t${fields.logo}\t${fields.sector}\t${response.statusText}\n`
      );
      console.log(response.status);
    } catch (err) {
      writeStream.write(
        `${docData.name}\t${docData.company}\t${docData.logo}\t${docData.sector}\t${err.message}\n`
      );
    }
  }
};

createPersonalizationFromCSVFile("./data.csv");
