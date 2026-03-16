require('dotenv').config();
const { MessageEmbed, WebhookClient } = require('discord.js');

const embed = new MessageEmbed()
    .setColor('#555555')
    .setAuthor({ name: 'RAIDED BY MIKO'})
    .setDescription(`# bố con mẹ m còn địt con cụ m thk óc lợn ba vạn  ngu lồn ơi  cái thứ mồ côi không nơi nương tựa óc lồn cặc bã loại thk não tật mà quyền lực hạn hẹp ngôn từ khuyết tật. Thk mặt cặc khiếm khuyết tinh trùng .  thằng đĩ cha mày bắn tinh nổ cả dương vật , khiếm khuyết cả 2 hòn dái vô cái lỗ lồn con đĩ bà già nhà mày mãi mà chỉ đẻ được thứ súc sinh phế vật óc cặc đú đởn như mày hả cái thứ phế vật trần gian , thk óc lợn bị bố mày chửi cho khuyết tật thị giác luôn ae ạ  , thằng óc lợn này cay bố mày quá liệt cả tinh hoàn à cái thứ đĩ điếm sĩ đời đầu thai 9 kiếp vẫn chưa hết sĩ , con đĩ cha m thk cặp kè với mấy con lồn già u80 để nuôi nấng m hả thk ngu`)
    .setFooter({ text: ' ', iconURL: '' });

const webhookurl = new WebhookClient({ id: process.env.WEBHOOK_ID, token: process.env.WEBHOOK_TOKEN });

setInterval(() => {
    webhookurl.send({embeds: [ embed ]});
  }, 1);