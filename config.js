const fs = require("fs");
const chalk = require("chalk");
//const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


//
/*global.Owner = process.env.OWNER || "2347045174399";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "2347045174399" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "2347045174399";// Also owner number
global.sessID = process.env.sessID || ""; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";// Owner Name
global.BotName = "🐦Makino-md-v2";//Do not change 🥵
global.packname = process.env.PACKNAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = ["2347015667458"];
global.OwnerNumber = ["2347015667458"];
global.ownertag = ["2347015667458"]; 
global.OwnerName =  "𝘿𝞢𝝯𝞘𝙇 𝞖𝞘𝞛𝙎𝞢𝙇𝙁ᵍʳᵉʸ ✞";
global.BotName = "𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇'𝙎 𝞑𝞗𝙏";
global.packname = "𝞑𝞢𝙇𝞗𝞜𝙂𝙎 𝙏𝞗";                             //Do not change.
global.author = "𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.sessID = process.env.sessID || "{"noiseKey":{"private":{"type":"Buffer","data":"cM6bbsRRKwUmEAWHWl+yrMcEN/YM54ctlP6R6zPI328="},"public":{"type":"Buffer","data":"rZCOlNkC4HJ4DZ1m8T4BqW5srHE59EOI2Q52fZga/GA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"4JEgR3jEbs0Y0AEjQLM8wZFU9r8M/CDmyqZhOzFBpmU="},"public":{"type":"Buffer","data":"JpFuWfF5bIUd54UDB0SikY1Ly+soNrt3vVi+ttYX60k="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"sC6L7U+hfKgw75Ya3psMUWgPtsUBcLm28aZY6q1oZnI="},"public":{"type":"Buffer","data":"l4T2NM52vrfUMMP7oG571HTFEn8jg3pvQqLPkq+KjR4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"APoQl5bUtMdGGKo1/hQlHfWERuqYsCSjML9Yuo1mIXg="},"public":{"type":"Buffer","data":"n0K/boJ2g3Cx21RZ/9Ak7oKYOOKfu4Wfs+//1WI7MGQ="}},"signature":{"type":"Buffer","data":"0hvArqru2w/rKAtd/mmWJCuiB++njkSWmot0nlTarv7V01SgcqVCR752sXAo1X+T1Ri9RhooMltIAhT+XiaHgQ=="},"keyId":1},"registrationId":114,"advSecretKey":"XddDPheFM6d+xfCzXlLcsIMPPTEM1pXeOPbpOmO7mN0=","processedHistoryMessages":[{"key":{"remoteJid":"2347015667458@s.whatsapp.net","fromMe":true,"id":"9DE3745C5B22AC12342432AAA7E15872"},"messageTimestamp":1717804718}],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"M1hecoRRS9GOa1r3Cd1bDw","phoneId":"f154aada-1760-426d-8300-2bd041915dd5","identityId":{"type":"Buffer","data":"anfO1RPrvAdObVbxRKp4rVF0BTQ="},"registered":true,"backupToken":{"type":"Buffer","data":"h1aDdcgoeSQ7EdRJMsh99DlrfHU="},"registration":{},"pairingCode":"BALPD6FZ","me":{"id":"2347015667458:42@s.whatsapp.net","name":"𝙏𝘿𝞖  ✞"},"account":{"details":"CL3NzagBEJS9jrMGGAEgACgA","accountSignatureKey":"+PjwSYwpfKuH77xqyU2Rlxpfosp1MtJZ00VgGgJ6ux4=","accountSignature":"DHPMfQoXkpH8QKdGCI502Yapq7Q/IkJ8e0Vs0KO+eCil1oXA9GaMqJloPD5fP3Nniigzc4hPLLBoS1AIu7yXDQ==","deviceSignature":"m0zWe+yRSxunP1hPgHvtXABlmPPlAPyhT8FvTfi6TNcA0OJQoWKLoKLqc9zDxyNJICiCbAX1TGShGjbwFdiniQ=="},"signalIdentities":[{"identifier":{"name":"2347015667458:42@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bfj48EmMKXyrh++8aslNkZcaX6LKdTLSWdNFYBoCerse"}}],"platform":"android","lastAccountSyncTimestamp":1717804894,"myAppStateKeyId":"AAAAAM78"}"; //Session ID here.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["¶"];
//process.env.PREFIX || "/";// Prefix                                 //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Abuja, Nigeria";                   
global.reactmoji = "🕊️";
global.themeemoji = "💔";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/anonphoenix007";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("https://telegra.ph/file/bfe7579f1b394f8cddc04.jpg");
global.Thumb = fs.readFileSync("https://telegra.ph/file/c4934f2ed246cac32e3e6.jpg");
global.Thumb1 = fs.readFileSync("https://telegra.ph/file/b365d8783b2c3ed48052d.jpg");
global.ErrorPic = fs.readFileSync("https://telegra.ph/file/2e531597e8a23ae4c5199.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go... 😎',
    useradmin: 'Only Group Admins can use the command 💔 ',
    botadmin: 'Make me Admin first 🧘📍.',
    botowner: 'Only 𝘿𝞢𝝯𝞘𝙇 𝞖𝞘𝞛𝙎𝞢𝙇𝙁ᵍʳᵉʸ ✞ can use this command, Dont even think of it 💋',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the 𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇 𝞑𝞗𝙏 can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ... 🦅',
    nolink: ' Provide me *the group link*, Baka!',
    error: 'Sharp, An error occured!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: '𝘿𝞢𝝯𝞘𝙇 𝞖𝞘𝞛𝙎𝞢𝙇𝙁ᵍʳᵉʸ ✞ *banned* this group from using me!',
    nonsfw: 'You will run mad,Say Amen! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
