const https = require('https');
const noblox = require('noblox.js')

exports.handler = async function(event, context, callback) {
  
  return {
    console.log("Hello there")
    statusCode:200,
    body:JSON.stringify({message:"Hello guys!"})
   }
}
