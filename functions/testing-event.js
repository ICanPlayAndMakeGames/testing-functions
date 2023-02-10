const https = require('https');
const noblox = require('noblox.js')

exports.handler = function(event, context, callback) {
  
  console.log("Hello there")
  
  return {
    statusCode:200,
    body:JSON.stringify({message:"Hello guys!"}),
     
   }

  

}
