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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xGWGpVY3ViU2ZLclhEaVpkYmcwNzdPS3BSMmNUYjdNWDE0V21DTWQyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXZoNjVnOWRjV0VTK3QrY0hNRjFKRW1TNUczSFp2Zmxjd21MbUp5VldqQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRFVQTUVIekxOTzJySzFMVmNQRTlGb29ySnQ5MVZscWtkZVJ6WFNlWTJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKYXVMaC9UTGZxL2lWQ0hweFcyaFpiUUVqYmEwN3RWbkdtNlJOWUUzNlFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNPRGs3TUF2bjVldWNVWVpZTkxhejE4RjBFRnoxaHAySklXWkVNTENaR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGS1JFVmt0cWpTdElONjRtallmaXVXL2x0ODhtNlZIbk04VHpLNXRUd1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9NYkNGdzBkQTUxSDRSMC9mV3E4L1Raa2NNaTQ2WnRlUlQ5Rk1Rd1pVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0xFU2ZpbGxrc0pSdURmZlV0VjdpVkViZGlGYWhlYXNZZUxlNXBTOW9YRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InREenF6V05GcDZvcVVDaU1GUDNBakNCVVVMdy9qSVdzR0hpLzZXNTlLTmpIbEx5cFdhT0pjWlpkOUVZR0lvaUhvSVowaDgyUExSUitId1hRbXhmZENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6ImJMUnNzQmRndWFsc3Y1UWxzaUN0eE1rbGFKL0dkRk1wdWJtM3V1R1ErTHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZwUDZnellNUk1HTlRBM09rZkhjYnciLCJwaG9uZUlkIjoiMGU4MTZlZGMtNzZkYi00ZTFmLWIzNTctY2ExMTY3YzlmMjllIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBBZnVkeTh0TXRrRDVuaGlUVjVrdWJZSXE2MD0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBUdmJuNGtxMGRkbmdrdmttV0RxMDFNZXBrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1hsc3M4REVON1drN2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK0FGMTdtMVFVbGhBMkVXeGQvamc3WU5IL1hqcml2RkYrRUhmUFpULzlsdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZTFXN3phU0JJeUhLaW1Sc0I2dG1sc2ZEQ1Q2dVJpMm0yUkNGL1c1SXJWcFNtcVh1VTNtRThERU5ZYkNrMzN5dEI3UVJiY3JKVmF1ZXZJL0tFZmpkaVE9PSIsImRldmljZVNpZ25hdHVyZSI6IkRoRTdHRllzVExZOFJVOG9kbUZFWnM4NzFJSndwQmYveUVzUWduUk56SUNzZitFYnFOakd0UEdPR0VlbkUvaVJZU2JNNUwwNTlBWXloSVNVNFZjSkJBPT0ifSwibWUiOnsiaWQiOiIzOTMzNDczMDIwODQ6NDdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4OTI0NTY2MjM3MTk5NDo0N0BsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzkzMzQ3MzAyMDg0OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZnQmRlNXRVRkpZUU5oRnNYZjQ0TzJEUi8xNDY0cnhSZmhCM3oyVS8vWmMifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4Mzc1NjU5LCJsYXN0UHJvcEhhc2giOiIycm5Ha0sifQ=="
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
