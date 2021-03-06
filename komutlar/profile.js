const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("❌ Bu komutu yürütmek için doğru izniniz yok. İzne ihtiyacın var - MANAGE_ROLES bu loncada! <:Admin:741321235400622180>");
  if(args[0] == "help"){
    message.reply("Kullanımı: ~ removerole <user> <role> <:Themadman:433793751756963854> <:Admin:741321235400622180>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("❌ Belirttiğiniz kullanıcı bulunamadı, lütfen daha sonra geçerli bir kullanıcı adıyla tekrar deneyin! <:Admin:741321235400622180>");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send(`❌ Hata: ${args[1]} Rol Bulunamadı! Lütfen geçerli bir rol belirttiğinizden emin olun! <:Admin:741321235400622180>`);
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("❌ Hata: Lütfen geçerli bir rol belirttiğinizden emin olun! <:Admin:741321235400622180>");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("❌ Belirttiğiniz kullanıcının şu anda bu rolü yok! <:Admin:741321235400622180>");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`❌ Adlı kişiden kaldırıldı ${gRole.name} rolü ${message.guild.name} ID: ${message.guild.id}. <:Admin:741321235400622180>`)
  }catch(e){
    return message.channel.send(`<@${rMember.id}>, Taşındı ${gRole.name} ancak onlardan mesaj atamadığım için DM'leri kilitlenmeli! <:Admin:741321235400622180>`)
  }
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["deleterole"],
    permLevel: 3
};

exports.help = {
    name : "rolsil",
    usage: "rolsil",
    description: "Belirtilen Kulanıcının Rolünü Siler"
};
