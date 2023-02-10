const https = require('https');
const noblox = require('noblox.js')

exports.handler = async function(event, context, callback) {
  
  return {
    statusCode:200,
    body:JSON.stringify({message:"Hello guys!"}),
     console.log("Hello there"),
   }
}
