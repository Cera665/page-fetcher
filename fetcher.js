const request = require('request');
const fs = require('fs');

const localPath = process.argv[3];
const urlToFetch = process.argv[2];

request(urlToFetch, (error, response, bosy) => {
  if (error) {
    console.log("Error:", error);
  }
  fs.writeFile(`$localPath}`, bosy, function(error) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log(`${body.length} bytes to ${localPath}`);
    }
  });
});



/* first try was not working!
const args = process.argv.slice(2);
let urlToFetch = args[0];
let localPath = args[1];

const writeFetched = function() {
  request(urlToFetch, (error, response, body) => {
    if (response.statuscode === 200) {   // 200 = ok! woot!
      fs.writeFetched(localPath, body, (err => {
        if (err) {
          throw error;
        } else {
          console.log(`${body.length} bytes saved to ${localPath}`);
        }
      }));
    }
  });
};
*/