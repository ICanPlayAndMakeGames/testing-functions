const https = require('https');
const noblox = require('noblox.js')

exports.handler = async function (event, context) {
   
   console.log("Yo")
   await noblox.setCookie("_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_F93F1E4F4876B1EF48C1354510EFC0DDD78158DDF83A97EAE88DAFE28748CF52177D2BBF92AAA287A4480B8B630CDA30E68AA37484C0E05BC26395EBCB4E2A9D25E0782542A3C017B4B3B74C448915F54181F484449CCE28678CF1578065BC9D7646DA70C9F26B8E93E3B9454E2D51B9FF0624FC05577EBE8FB228346F20B68A4FC39FF9CB8D9DDA188ED4206DF246577FB8D6856926E3726A1A04B3DFB6FF5096174D0472E8860D8AAFDA7377491FC1C73D3D0B7B19AF744C9D6D3A5C290940C4279B52E559DE42AAC15F9D119D11AC148795FE78FAF89B88F00F7B45AB7CAFEC779BA5DA7E6E640F5350544D2536BB0A2D29614CD854EB2F8B304B687F658D6D83381AD114D354893B4E15B8EE34E98B86687A9C99D5833BFA8C90A6A8FFC634491E42E4BBE01BF60AB118E6F88135CCDB631D6DE24161BB5434B113134C70A5C5A4DFBE19335196A67FAB8A790103215AC30BE3934D09C0FDB02691E7A69FAEFA5A7D58CDDD77BE141939F0788638C514437EEAAF37C57D2EC939834A1373D4F09D89")
   await noblox.sendFriendRequest(2786156208)
   
   
   return{
      statusCode: 200
    }
   
   
  
};

