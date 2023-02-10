const https = require('https');
const noblox = require('noblox.js')

exports.handler =  function(event, context) {
  
 function idk() {
   return {
     statusCode: 200,
     body: JSON.stringify({ message: "Hello World" }),
   }
 }
  
  async function testing() {
    await idk();
    console.log("Ayyy finished")
  }
  testing()
}
