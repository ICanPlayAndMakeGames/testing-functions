const https = require('https');

exports.handler = async function(event, context, callback) {
  console.log("Hello there")
  return {
    statusCode:200,
    body:JSON.stringify({message:"Hello guys!"})
   }
}
