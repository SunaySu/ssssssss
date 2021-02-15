const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === "741321235400622180") {

      message.channel.send(':1234: **SunayBot için gerekli şeyler kuruluyor...**');
      message.guild.createChannel('mod-log');
      message.guild.createChannel('log');
      message.guild.createChannel('giris-çıkış');
      message.guild.createChannel('sayaç');
      message.guild.createChannel('otorol');



        message.channel.send(':white_check_mark: **Herşey Kuruldu**');

    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu şimdilik kullanamazsınız!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kur',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 'sb?kur'
};
