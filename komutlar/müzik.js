const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const müzik = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x8e44ad)
  .addField(`Müzik`, 'sb?çal: İstediğin şarkıyı çalar.\n n!durdur: Müziği durdurur.\n sb?devam: Müziği devam ettirir.\n sb?kuyruk: Kuyruğu söyler\n sb?geç: Geçerli çalınan müziği geçer\n sb?ses: Belirlediğiniz değerde sesi açar.\n sb?stop: Müziği kapatır.')
  .setFooter(`Sunay Aydın - Tüm hakları saklıdır.`, client.user.avatarURL)
  console.log("Bildirme: sb?müzik komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.sendEmbed(müzik);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzik'],
    permLevel: 0
  };

  exports.help = {
    name: 'müzik',
    description: 'müzik',
    usage: 'müzik'
  };
