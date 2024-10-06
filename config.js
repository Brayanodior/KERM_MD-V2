//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/303347302084 , https://wa.me/393347302084";
global.sudo = process.env.SUDO || "393347302084";
global.owner = process.env.OWNER_NUMBER || "393347302084";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhwdVorNk1Yd1R0YzJrdDAzWk1IeXdkNWR2ajArdkl0Nm9TeUc0dGRXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTdlWEQ1YzhkSXRNVzJHYnFWZytVcm1ORURXZ1hWSko0Z2gwUExBVW1BQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUFBYOXBxU2MzYStiWDBPbU02cGhIbXRJaVRzNExzcEdyK3BMZDZkQkZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMdzYvQWJyQ3NBN1FRU09ja1FGRStoeDB0bXBFeDJzanFvQWI4RFY5TkZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQYXN3UkhNKy82aWRPU0JNS3hGSi9TaXBoMjFKTkZBeHB0WkQ1MlYzR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlSdUE2V09Mdkw0eHE3blE2ZE52b3YvMXd0dVJMQStjS1U4bDR4Y25YbFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUQxYno0RmprdkcwdjNmOVRhWllkK2tDR2plMlpZYVR1WUlCaGVZUVoyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialNrSG5DZjNsQU5zU0ZBVW1XWGVuSGFQeTZ0WVZWWFFvSXVKYVhrVkIyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5za3FDNDJKTjdnZUs5dmVLK0l1VUdsUERDcXNrM28xVnNnb1pESnNMRXdQc0JIT2VIL3owRGQ0Sno4MndUWUhmYmJzbmR5azJrZUhtckY5dXlDS2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJweTV3Z0R0aEYwMlF2WVpVUHQ1YnNEVWhpNXlUQ3NBaVFlTVNNZG5Edk8wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiTnkzNWJsWVE5bVBPMkZTeUEwQzZBIiwicGhvbmVJZCI6IjE5MDM1NjdmLTg4NjUtNDQzNS05N2Y0LWNmYzA2MjFkMGExZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxQ2xaZy8zeEgyVTFPOE1mcnNzaWF3Z2tQTmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1ZIZno0YjRtYnY1ODBMZFl1TWhtakJaclpNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhEQ1lEVjVGIiwibWUiOnsiaWQiOiIzOTMzNDczMDIwODQ6NDNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pLNTI1a0tFTmEyaWJnR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhrYnlsSUpZY3dNNzI0MWhRNG9iT3dlUGJiaGtXeEFpNS9VODljYlovaWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhzbUp4YVd0SjhGNlRVR3YxMUxieWFUTTdIMXkwaW8wcnF4YTBuaitmNEczcWpTdzFpalZVYVpQVGh2MVZyVUJhRUJwc3BkNlg4dXdVd0NHQ0YrdkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvLzY4bndRQ0lTR085dU5jclRLRWJpNWd0SnkwTEE4aTBaWnZ5TW91R2pudy9QOTJKSDZLN2xZRmJpaUJjV3FCc0hGTHA0dmYraDQ1SkFac3hOOUNoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjM5MzM0NzMwMjA4NDo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmSkc4cFNDV0hNRE85dU5ZVU9LR3pzSGoyMjRaRnNRSXVmMVBQWEcyZjRwIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgyMDc3MTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3ZBIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "BRYANO 2.0",
  packname: process.env.PACK_NAME || "brayano-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘BRAYANO🇨🇲🇮🇹🤍𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜brayan wb🤍💀🖤 ⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
