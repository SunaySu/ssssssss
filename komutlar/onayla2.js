const Discord = require('discord.js');
exports.run = function(client, message, args) {
        var role = message.guild.roles.find(role => role.name === "Botlar")

    var öneri = args.slice(0).join(' ');
    var guildID = "741321235400622180";
    var channelID = "741321235400622180";

    if (!öneri){
        return message.reply("Bir bot belirtin! Doğru kullanım: **sb?onayla2 yada sb?verify2 **");
    } else {

        var embed = new Discord.RichEmbed()
            .setTimestamp()
            .setColor(0x36393E)
            .addField("Onaylayan:", message.author.tag)
            .addField("Bot:", öneri)
            .setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL);

        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.channel.send("**Bot Onay Log Gönderildi !**")

    };


};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["verify2"],
  permLevel: 3
};

exports.help = {
  name: 'onayla2',
  description: "Seçilen Botu onaylar...",
  usage: 'onayla2'
};
