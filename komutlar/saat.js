const Discord = require('discord.js')

exports.run = (client, message, params) => {
const embed = new Discord.RichEmbed()
.setTitle(':flag_tr: Türkiye(İstanbul) için Saat Aşağida Yazmaktadir')
.setTimestamp()
.setFooter('Türkiye(İstanbul) ->')
.setColor(0xff7f00)

message.channel.sendMessage(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'saat',
    description: 'saat',
    usage: 'saat'
  };
