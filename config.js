const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "S=eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1BFcDRUZU1qcnpTVWFNKzR2Wk4wRzFVZ1RzYTdoYVNLL2ZTcEl2VzBtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVFtRnpwdytHUkZuNmhPMUNMazUzdTQ1YXRPVHhuSDJPR0VVVklFUHJITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTjc5cVViZXFwbUNYd01zN2MvTHo4ZExobkhPb2oxZDl4dXNZYXZQMjJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0UXg2MnEwcll6RTB0YVlmUUVUTFFzUVdVa3RXcWE4K3ZUUkViYjBWTVRJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOc2Z6SXBDTFBYVXBYVTlhd2tsYXJRYUxrckMvcWZBTFBDRFlMUjAxbDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNTTFhaN1ZJR3UzcmZPL0JwTHhFdlE3QWJrZVlsWGtiRE5Ub0hNbnQxbGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENMRmJlS0pYRHhES2RST3grcUY0Q1VFZlY4dTVtR1ZwQzI1YU9MNzYyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFZVZ0ZLRmg2bjdPbEFRMzRxODR3dUQzQVVlcFY5VHVvL0tVWUxvcitDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI5K0NVZVJkWk1KV1ZSQkZVV0pYeTFCS1pPcFptTmd2Q3B6cnFsUGpvUVdrVFFRZjg4eCtWU1F2My8xVDduMzZpWDhMMCtOTHkwQ0F6ZmlUaGNRQ0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJlcmdTSnFEUHN6dFdINEk5NDJnZHZucHZhdlpwQmNodXRIbHdzTFYwOTBZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJIOVZSTTE1TCIsIm1lIjp7ImlkIjoiOTQ3MDM0MDM2NzE6MzdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLlxuXG5cbi5cblxuXG4uXG5cblxuLlxuXG5cblxuXG5cblxuLlxuXG5cbi4gXG4gICAgXG4gICAgICAgIFxu8J2QkvCdkIfwnZCA8J2QhvCdkITwnZCEIiwibGlkIjoiMjI3NjQwNDgxMzgyNzE6MzdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJL2RocDBIRU56dnE4VUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVS2lIV3A4aS9za0RsUjV2Qk5ROTNHTU5tZW00WHBmcmlQcnpWNFJUNERzPSIsImFjY291bnRTaWduYXR1cmUiOiJDZGNyZFFTcmJTRWl2S0ZBM1dqVVNRdzNHNTZMSHRYT1RiYnlHMlpRQmt3Mmd4MWl6N1FVQ3E4OWxDajRqa3FVMmFwNHpFMXcrOVNtZlJVdXBKOVVCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWm9Rc1RGaGJIUCtUVGJTY0kyU2dOQ2pPcVFmYmpQREVYY3pTTWtBb3gxZk53TTc2L29oTnBESlV3YlB4bnZuQkczNGM1UG51NnVuMkRUNndvajNpQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMzQwMzY3MTozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWQ29oMXFmSXY3SkE1VWVid1RVUGR4akRabnB1RjZYNjRqNjgxZUVVK0E3In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwMzUwNDksImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEN2EifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SHAGEE 💗*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/39kWRqJs/320.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SHAGEE X-BOT",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHAGEE MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94762048412",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "SHAGEE TᴇᴄʜX",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "> ＳＨAG EＥ 🌑⚡ | ⛚ Sʜᴀɢᴇᴇ   BᴏᴛＺｚ ᴢ  ᴛᴇᴄʜ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/sdsy6LG6/3mfp-OTP7c1.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive now *SHAGEE-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 
DEV: process.env.DEV || "94740433291",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
