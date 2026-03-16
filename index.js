require('dotenv').config();
const { MessageEmbed, WebhookClient } = require('discord.js');
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const embed = new MessageEmbed()
    .setColor('#555555')
    .setAuthor({ name: ''})
    .setDescription(`# miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥
        # miko ontop 🔥`)
    .setFooter({ text: '', iconURL: '' });

const webhookurl = new WebhookClient({ id: process.env.WEBHOOK_ID, token: process.env.WEBHOOK_TOKEN });

setInterval(() => {
    webhookurl.send({embeds: [ embed ]});
  }, 5000);

  function sleep(ms){
 return new Promise(r=>setTimeout(r,ms));
}

async function send(){
 while(true){
  await webhook.send("test");
  await sleep(2000);
 }
}

app.get("/", (req,res)=>{
    res.send("Bot is alive");
});

app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT);
});

  process.on('uncaughtException', console.error);