const https = require('https');
const noblox = require('noblox.js')

exports.handler = function (event, context) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function demo() {
      let date = new Date();
      await sleep(1000);
    console.log("Done");
  }

  demo();
};

