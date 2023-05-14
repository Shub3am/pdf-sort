const PDFExtract = require("pdf.js-extract").PDFExtract;

const pdf = require("pdf-parse");

const pdfExtract = new PDFExtract();
const fs = require("fs");
const dataBuffer = fs.readFileSync("./hech-333.pdf");

pdf(dataBuffer).then(function (data) {
  // number of pages
  console.log(data.numpages);
  // PDF text
  let s = data.text;
  let xa = s.split("\n");
  console.log(xa);
  xa.filter((x, index) => {
    if (x == "Pickup") {
      console.log(index);
      console.log(xa[index - 1]);
      console.log(xa[index - 1] === undefined);
    }
  });
});

/* LEGACY CODE */

/* see below */
// pdfExtract.extractBuffer(buffer, options, (err, data) => {
//   if (err) return console.log(err);
//   pages = data.pages;
//   tempData = "";
//   pages.forEach((page, index) => {
//     console.log(page);
//     console.log(`Page ${index + 1}`);
//     page.content.forEach((element) => {
//       //   console.log(element);
//       // extract text from 'Destination Code' to 'Pickup'
//       //   if (element.str.includes("Destination Code")) {
//       //     // read until 'Pickup'
//       //     let i = 1;
//       //     while (!page.content[index + i].str.includes("Pickup")) {
//       //       tempData += page.content[index + i].str;
//       //       i++;
//       //     }
//       //   }
//       // });
//       // // trim the tempData from 'Destination Code' to the end
//       // tempData = tempData.substring(tempData.indexOf("Destination Code"));
//       // console.log(tempData);
//       // // reset tempData
//       // tempData = "";
//     });
//   });
// });

/* LEGACY CODE */
