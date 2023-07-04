const PDFExtract = require("pdf.js-extract").PDFExtract;

const pdf = require("pdf-parse");

const pdfExtract = new PDFExtract();
const fs = require("fs");
const dataBuffer = fs.readFileSync("./sampleFile.pdf");

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
