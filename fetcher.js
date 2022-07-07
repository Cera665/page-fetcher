const request = require('request');
const fs = require('fs');

const localPath = process.argv[3];
const urlToFetch = process.argv[2];

request(urlToFetch, (error, response, bosy) => {
  if (error) {
    console.log("Error:", error);
  }
  fs.writeFile(`$localPath}`, body, function(error) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log(`${body.length} bytes to ${localPath}`);
    }
  });
});