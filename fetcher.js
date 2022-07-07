const request = require('request');
const fs = require('fs');


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