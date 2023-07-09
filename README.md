- [Introduction](#introduction)
- [Marketing Department](#marketing-department)
  - [CSV File Format](#csv-file-format)
- [Customer Engineer](#customer-engineer)
  - [How to Run This Project](#how-to-run-this-project)
    - [Assumptions](#assumptions)
    - [Instructions](#instructions)
    - [Code Organization](#code-organization)
  - [Further Improvements, Ideas and Discussion](#further-improvements-ideas-and-discussion)

## Introduction

Before you begin reading this file, you might want to install some sort of markdown previewer for a better reading experience.

This README.md file is intended for both the Marketing and Customer Engineering departments. For the purpose of this assignment, I have chosen to include them in the same file thinking that it would be easier for evaluaters to have everything in the same file. However, in a real scenario, I would have separated them into distinct files.

## Marketing Department

The following serves as a set of guidelines for the Marketing department. They need to be advised follow these guidelines whenever they submit a request for the creation of a personalized document. To ensure that they are aware of these guidelines, the Customer Engineering team should make it available to them through internal communications, documented resources, or any other existing channels utilized by the company.

### CSV File Format
- To carry out the task of creating personalizaation, we will need to submit a CSV file with the details 
- Ensure that your file is in CSV format.

- Make sure that your csv has the following headers: name, company, logo, sector. If you would like to change this format. Please talk to one of the Customer Engineering people and they might be able to incorporate this changes. 

- If any fields in the CSV file contain a comma within their text, enclose the field in quotation marks. For example, if the name of the company is **Instagram, a Meta company** it should be formatted as **"Instagram, a Meta company"** (with the quotation marks).

**NOTE**: Most spreadsheet applications like Microsoft Excel automatically handle this formatting. However, if you are using text editors such as VS Code, Sublime Text, Vim, etc., it is essential to follow this formatting style. After saving your file in a spreadsheet application, you can open it in a text editor to verify that your data is formatted correctly.

Following these guidelines ensures smooth processing of the data you submitted. If you have any questions or require assistance, please reach out to the Customer Engineering team for support.

## Customer Engineer

This note is intended for colleagues in the Customer Engineering department who may provide assistance to the marketing department in the creation of a customized document.

### How to Run This Project

#### Assumptions

I expect the individuals running this script to possess a basic understanding of technical concepts related to programming. While having experience with any programming language could suffice, having some prior experience with Node.js or JavaScript may provide a slight advantage in terms of quickly setting up and running the script.

#### Instructions

- Before you run, you will need a node js application on your terminal. The node js version I am currently using is v16.13.1

- Clone the repository from GitHub by executing the following command: git clone https://github.com/haigussa/turtl_docs. This will create a local copy of the project.

- Install all the dependencies required for the project by navigating into the project directory and excuting the following command on your terminal.
npm install

- Finally, create a .env file in the root of the project and save your turtl token under the key TURTL_TOKEN. Once completed, this file should contain something that looks like this: TURTL_TOKEN=YOUR_TOKEN_GOES_HERE

- Once all is set up and you are ready, you will need to save the CSV file you get from the Marketing Department under the file name data.csv. For simplicity, this script is set up in such away that this csv file saved in the root folder. 

#### Code Organization

Here the main points you will need to know about how this code is organized:

- To run the script you will need to navigate to a directory where you clone this repository

- Once you are there you will need to run the following command `npm run personalize` or  `node personalizeDocument.js`. This will execute the code in the 'personalizeDocument.js' file. 

- Once you create the documents, if you want to get all the personalized documents, you can run the command `npm run getDocuments` or `node getPersonalizedDocuments.js` from you command line. Besides logging the documents onto your command line, this will also save the details of the documents as a JSON file under the name `personalizedDocuemtn.json` in the root of your file. 
  
- Please note that this script is written for one document ID and document URL. But if you ever have a different doc, feel free to modify the constants/variables `DOC_ID` and `DOC_URL` which are located on the top of the JavaScript file named `personalizeDocument.js`.

- When the personalizeDocument script runs, it will use other functions defined in the 'lib.js' file

- During code execution, the status of the code will be logged/saved in the "outputs" folder. Each time you run the code that create the personalized document, a new CSV file will be generated in the output folder, documenting the status of each document. This log serves as a helpful resource to review completed work and identify any failures. It is also beneficial for future reference. However, it is important to periodically clear this folder as it can clutter the folder with a lot of files.

Just in case you are curious about the seemingly random number at the end of the file, it is actually a timestamp indicating the approximate time when the code was executed. If you have to find out when this code has run for some reason in the futre, all you have to do is convert this time stamp to date.

### Further Improvements, Ideas and Discussion
The proposed solution can be effective, but its effectiveness depends on how often and how many tasks need to be performed. Regardless, it is always valuable to continuously improve any process. In this case, I believe that we can focus on enhancing the need for marketing personnel to contact either myself or a customer engineer whenever they need to create a personalized document. To make the process smooth and minimize email communication that may take time, we should explore options to enable marketing individuals to independently carry out these tasks.

To empower marketing personnel to independently execute this process, we can start with a simple setup. For instance, if Turtl is using Gmail, one suggestion is to utilize Google Sheets and Google Apps Script, which is based on JavaScript. Here's how it would work:

1. Establish a system where marketing employees enter their data into a dedicated Google sheet.

2. Create a custom menu that triggers the document personalization process when clicked. This menu will be set up by us.

3. Marketing personnel can execute the script by simply clicking the custom menu, without the need to wait for a response from a customer engineer. They won't have to understand or interact with the underlying code itself.

The customer engineering team will be available for any support or maintenance needs that may arise. 

I would like to mention that I have previously implemented a similar process for individuals with less technical expertise. The outcome was a significant boost in productivity. This was achieved by providing a seamless method for non-technical individuals to independently run the process without the need to deal with complex coding or wait for assistance every time they need somethings done.

Another idea worth considering is using Python instead of JavaScript. Python offers an easy approach for working with CSV files. While this change would primarily affect the underlying code and not the output, it can simplify code maintenance and may be easy for the team work with. It is important to discuss this option with the team, as they may have insights specific to their current situation that I may not be aware of.