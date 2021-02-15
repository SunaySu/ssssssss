const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcısı:** <@741321235400622180>")
  .setFooter('Sunay Su Aydın', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[WEB SİTE](https://instagram.com/sunayd1n_)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/p6v3vf6Qar)`, false)
  .setURL('https://discord.com/oauth2/authorize?client_id=801805901392248837&scope=bot&permissions=8')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};
