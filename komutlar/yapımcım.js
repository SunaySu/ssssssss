const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embed = new Discord.RichEmbed()
        .setDescription('')
        .setColor(0x00ffff)
        .addField("**》 Yapımcım 《**", `'𝐌𝐨𝐨𝐧𝐒𝐡𝐢𝐧𝐞#1528`)
        .setURL('https://www.instagram.com/sunayd1n_')
        .setTitle("İnstagram Ulaşmak İçin Tıkla!")


    return message.channel.sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yapımcım'],
    permLevel: 0
};

exports.help = {
    name: 'yapımcım',
    description: 'Botun Yapımcısını Gösterir',
    usage: 'yapımcım'
};
