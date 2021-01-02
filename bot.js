const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require("hh-mm-ss")
const dateFormat = require('dateformat');
const fs = require('fs');
const pretty = require('pretty-ms');
const rn = require('random-number');
const moment = require('moment');
const Canvas = require('canvas')
const jimp = require('jimp')
const sql = require('sqlite')
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const Engine = require(`node-uci`).Engine; //npm i node-uci
const stockfish = new Engine('stockfish-8-mac/Mac/stockfish-8-64');
const child_process = require('child_process')
const config = require('../config/config.json')
const prefix = config.prefix;


const Token = config.token;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log(`Informations About ${client.user.username}:`)
  console.log('')
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log(`Arch! [ " ${process.arch} " ]`);
  console.log(`Platform! [ " ${process.platform} " ]`);
  console.log(`Node Version! [ " ${process.version}" ]`);
  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " NodeJS " ]`);
  console.log(`Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(`${client.user.username} Is Online`)
  console.log('╚[════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log('Created By: ScorpionX')
  console.log('╚[════════════]╝')
});



client.on("message", message => {
	  if (!message.guild || message.author.bot) return;
      if (message.content == "$colors") {
          var fsn = require('fs-nextra');
          fs.readdir('./colors', async (err, files) => {
              var f = files[Math.floor(Math.random() * files.length)];
              var {
                  Canvas
              } = require('canvas-constructor');
              var x = 0;
              var y = 0;
              if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0) return;
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(() => {
                  x += 100;
                  if (x > 100 * 12) {
                      x = 100;
                      y += 80;
                  }
              });
              var image = await fsn.readFile(`./colors/${f}`);
              var xd = new Canvas(100 * 11, y + 350) // كانت 250 يلي هو الحين 350
                  .addBeveledImage(image, 0, 0, 100 * 11, y + 350, 100) // يلي هي الحين 350 كانت 250 و يلي هي الحين 100 كانت 50
                  .setTextBaseline('middle')
                  .setColor('white')
                  .setTextSize(60)
                  .addText(`قائمة الألوان`, 375, 40);
              x = 0;
              y = 150;
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(role => {
                  x += 75;
                  if (x > 100 * 10) {
                      x = 75;
                      y += 80;
                  }
                  xd
                      .setTextBaseline('middle')
                      .setTextAlign('center')
                      .setColor(role.hexColor)
                      .addBeveledRect(x, y, 60, 60, 15)
                      .setColor('white');
                  if (`${role.name}`.length > 2) {
                      xd.setTextSize(30);
                  } else if (`${role.name}`.length > 1) {
                      xd.setTextSize(40);
                  } else {
                      xd.setTextSize(50);
                  }
                  xd.addText(role.name, x + 30, y + 30);
              });
              message.channel.sendFile(xd.toBuffer());
          });
      }
  })





const id = JSON.parse(fs.readFileSync("./id/rank.json", "utf8"));
client.on("message", message => {
  if (message.author.bot) return;
fs.writeFile('./id/rank.json', JSON.stringify(id), (err) => {
if (err) console.error(err);
});
});
      client.on('message', message => {
          if(!id[message.author.id]) id[message.author.id] ={
              textrank: 1,
              points: 1
          };
          if(message.author.bot) return;
          id[message.author.id].points = Math.floor(id[message.author.id].points+4);
          if(id[message.author.id].points > 10) {
              id[message.author.id].points = 10;
              id[message.author.id].level = Math.floor(id[message.author.id].level+4);
          }
          fs.writeFile('./id/rank.json', JSON.stringify(id), (err) => {
if (err) console.error(err);
});
    
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "rank")) {
                               let user = message.mentions.users.first();
         var human = message.mentions.users.first();
            var author;
            if(human) {
                author = human;
            } else {
                author = message.author;
            }
          var mentionned = message.mentions.members.first();
             var ah;
            if(mentionned) {
                ah = mentionned;
            } else {
                ah = message.member;
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!id[getvalueof.id]) id[getvalueof.id] = {textrank: 0,points: 1};
            let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
            fs.readFile("./id/rank.png", function (err, Background) {
            if (err) return console.log(err);
            let id = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
 
});
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        // N A M E  |  S H A D O W
                        ctx.font = 'bold 18px Arial';
                        ctx.fontSize = '18px';
                        ctx.fillStyle = "#000000";
                        ctx.textAlign = "center";
                        ctx.fillText(`${getvalueof.username}`, 253, 79);
 
                        // N A M E
                        ctx.font = 'bold 18px Arial';
                        ctx.fontSize = '18px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${getvalueof.username}`, 253, 77);
 

                        // T E X T  R A N K
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${id[getvalueof.id].textrank}`, 252, 124); 
 
                        // P O I N T S
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${id[getvalueof.id].points}`, 253, 171);
 
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 26, 69, 93, 93);
                        
message.channel.sendFile(canvas.toBuffer());

});
});
}
});
});





  
     



client.on('message', message => {

  if(message.content.split(' ')[0] == prefix + 'id') {
  if(!message.channel.guild) return;
 
  let args = message.content.split(' ').slice(1).join(' ');
 
         let defineduser = '';
         if (!args[1]) {
             defineduser = message.author;
         } else { // Run this if they did define someone...
             let firstMentioned = message.mentions.users.first();
             defineduser = firstMentioned;
         }
 
         const w = ['./id5.png','./id6.png'];
         var Canvas = require('canvas')
  var jimp = require('jimp')
 
          const millis = new Date().getTime() - defineduser.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy');
  const stats2 = ['online', 'Low', 'Medium', 'Insane'];
  const days = millis / 1000 / 60 / 60 / 24;
           dateFormat(now, 'dddd, mmmm dS, yyyy');
               let time = `${dateFormat(defineduser.createdAt)}`
               var heg;
               if(men) {
                   heg = men
               } else {
                   heg = message.author
               }
              var mentionned = message.mentions.members.first();
                var h;
               if(mentionned) {
                   h = mentionned
               } else {
                   h = message.member
               }
         let Image = Canvas.Image,
             canvas = new Canvas(300, 300),
             ctx = canvas.getContext('2d');
         ctx.patternQuality = 'bilinear';
         ctx.filter = 'bilinear';
         ctx.antialias = 'subpixel';
 
         fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
             if (err) return console.log(err);
             let BG = Canvas.Image;
             let ground = new Image;
             ground.src = Background;
             ctx.drawImage(ground, 0, 0, 300, 300);
 
  })
    var mentionned = message.mentions.users.first();
 
     var client;
       if(mentionned){
           var client = mentionned;
       } else {
           var client = message.author;
 
       }
 
  var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
                 let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
                 jimp.read(url, (err, ava) => {
                     if (err) return console.log(err);
                     ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                         if (err) return console.log(err);
 
                         let Avatar = Canvas.Image;
                         let ava = new Avatar;
                         ava.src = buf;
                         ctx.drawImage(ava, 112 , 40, 75, 75);

                         var status;
     if (defineduser.presence.status === 'online') {
         status = 'ONLINE';
  ctx.fillStyle = `#2ce032`;
  ctx.beginPath();
  ctx.arc(179, 107, 10, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
 
     } else if (defineduser.presence.status === 'dnd') {
         status = 'DND';
         ctx.fillStyle = `#ff0000`;
  ctx.beginPath();
  ctx.arc(179, 107, 8, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
     } else if (defineduser.presence.status === 'idle') {
         status = 'IDLE';
         ctx.fillStyle = `#f4d32e`;
  ctx.beginPath();
  ctx.arc(179, 107, 10, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
     } else if (defineduser.presence.status === 'offline') {
         status = 'INVISIABLE';
         ctx.fillStyle = `#898988`;
  ctx.beginPath();
  ctx.arc(179, 107, 10, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
     }
 
 
                                               var time2;
       if(mentionned){
           var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
       } else {
           var time2 = `${dateFormat(message.member.joinedAt)}`;
 
       }
 
                         ctx.font = 'Bold 15px Arial ';
                         ctx.fontSize = '15px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(status, 70 , 108 );
 
                          ctx.font = 'Bold 13px Arial';
                         ctx.fontSize = '13px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );
 
 
                         ctx.font = 'Bold 20px Arial ';
                         ctx.fontSize = '15px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`${defineduser.username}`, 150.50 , 140);
 
 
                         ctx.font = 'Bold 15px Arial';
                         ctx.fontSize = '15px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);
 
                         var time2;
       if(mentionned){
           var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
       } else {
           var time2 = `${dateFormat(message.member.joinedAt)}`;
 
       }
 
                         ctx.font = 'Bold 13px Arial ';
                         ctx.fontSize = '13px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
                         ctx.font = 'Bold 13px Arial ';
                         ctx.fontSize = '13px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`, 179 , 253);
 
  message.channel.sendFile(canvas.toBuffer())
 
 
         })
     })
 
 
 
 
  }
 
  })
 
 




client.login(Token)
