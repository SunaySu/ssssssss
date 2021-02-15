const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');
const ayarlar = require('../ayarlar.json');

const { stripUndents } = require("common-tags")
exports.run = (client, message) => {
                    if (message.guild) {
			var embed = new Discord.RichEmbed()
			.setTitle('Yenilikler')
			.setDescription(stripIndents`
			**Sürüm 1.0.1**
			> radyo komutu eklendi. _kullanmak için \`sb?radyo\`_
      > RolVer komutu eklendi. _kullanmak için \`sb?rolver\`_
			> Roller komutu eklendi. _kullanmak için \`sb?roller\`_
			> düello komutu eklendi. _kullanmak için \`sb?düello\`_
      Müzik Komutları görmek için \`sb?müzik\`
			`)
			.setColor('RED');
			return message.channel.send({embed});
		}

		var embed = new Discord.RichEmbed()
		.setTitle('Yenilikler')
		.setDescription(stripIndents`
			**Sürüm 1.0.1**


			> Sustur komutu eklendi. _kullanmak için \`sb?sustur\`_
			> SusturAç komutu eklendi. _kullanmak için \`sb?susturaç\`_
		  > Rol-Ver komutu eklendi. _kullanmak için \`sb?rol-ver\`_
			> Roller komutu eklendi. _kullanmak için \`sb?roller\`_
			Komutları görmek için \`n!yardım\`
		`)
		.setColor('RED');

		return message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
