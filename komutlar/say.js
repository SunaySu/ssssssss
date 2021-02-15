const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'emojiyazı',
  description: 'Mesajınızı emojiye çevirir.',
  usage: '<emojiyazı>'
};
