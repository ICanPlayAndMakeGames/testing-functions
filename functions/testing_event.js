const https = require('https');
const noblox = require('noblox.js')
import axios from 'axios'

exports.handler = async function (event, context) {
   
  
    setTimeout(() => { axios.get('https://typical-jet-diadem.glitch.me/TestingW').then(function(response){
    res.send("finished")
   }).catch(function(error){
    console.log(error)
   }) }, 270000);
   
 
  
 
   
   
   return{
      statusCode: 200
    }
   
   
  
};

