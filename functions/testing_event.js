const https = require('https');
const noblox = require('noblox.js')
const axios = require('axios')

exports.handler = async function (event, context) {
   
   console.log("Yo")
   const Response = await axios.get('https://games.roblox.com/v1/games?universeIds=2619619496')

   if (Response) {
    console.log("YE WE DID IT")
    consoloe.log(Response.data)
   }
   
  // const player = await noblox.setCookie("_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_DB44CCAA1288C6F7595F3AD72FC63BBEFB4807EFAA949697BC60F28244BCF3D3A31A5F3F05957D373A3A34B3F95F68FA47C04B3E9C4C9AE5976642CB2A309A58450926C786E31908BBA7A57C303B1B525CF555D0561F746F271102E13443305515330498B0713B218FFFAF66DD323D2E8EEF38AE0728B7007D60CD0346D91EBB2C9198C780398AF9C6A2E8FECE309D77581934D0D5C12D988CBFF8031DBAEF025D5CF6401109499D545205540FB6A7F8A93B96640732E7CD1B15146E105BE4AD6323B5A35986981DE0664D53EAF6E723038056E8F8013852303F2F3489E4009DCCB078B8C01C74F046AFA813BD5C75E362970D92DDC1CB95DDFADD1AE84527EB2268EA67E251B498F8471CED71F81CF683CB288EF361C2A9B62CCDA43334953C0CB946BEE4C81863E63B9C00EF0ADBC0EE7C1278E912CFC7D3E63B846DB62BE72FA61C7629EC14B5DECC4D6027686E79725D43323A5130304722F5D0149769D1B5B1DC0E015C4780A1B25EACA1558988E7CD2FBA9AAFD34CA1AF016BBFEEEE1501B30EF968337BB89D25CF5D37BCC69213886730")
  // console.log(player.UserName,player.UserID)
 //  console.log( noblox.sendFriendRequest(4328641888))//.then(function(){
       //console.log("finished doing this")
   // }).catch(function(error) {
  //console.log("There was an error!", error)
//})
       
       
 //  const conversations = await noblox.getUserConversations()
   
 //  for (var i = 0; i < conversations.length; i++) {
  //    noblox.sendChatMessage(conversations[i].id,"TestingW").then(function(){
   //    console.log("finished sending chat to ",conversations[i].title)
 //   }).catch(function(error) {
//  console.log("There was an error!", error)
//})
//}
   
  
 
   
   
   return{
      statusCode: 200
    }
   
   
  
};

