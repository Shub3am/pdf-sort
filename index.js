const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const { log } = require('console');
const fs = require('fs');
const buffer = fs.readFileSync("./hech-333.pdf");
const options = {}; /* see below */
pdfExtract.extractBuffer(buffer, options, (err, data) => {
  if (err) return console.log(err);
    pages=data.pages;
    tempData='';
    pages.forEach((page, index) => {
        console.log(`Page ${index + 1}`);
        page.content.forEach((element) => {
            // extract text from 'Destination Code' to 'Pickup'
            if (element.str.includes('Destination Code')) {
                // read until 'Pickup'
                let i = 1;
                while (!page.content[index + i].str.includes('Pickup')) {
                    tempData+=page.content[index + i].str;
                    i++;
                }
            }

        });
        // trim the tempData from 'Destination Code' to the end
        tempData=tempData.substring(tempData.indexOf('Destination Code'));
        console.log(tempData);
        // reset tempData
        tempData='';
    }
    );
});