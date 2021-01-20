const {MessageEmbed} = require("discord.js");


module.exports.help = {
    name: 'allroles',
    aliases: ["allroles"],
    description: 'Renvoie un message avec des réactions!',
    cooldown: 0,
    usage: '<votre_message>',
    args: false
};

module.exports.run =(client, message, args) => {
  const rocketrole = message.guild.roles.cache.get("801311608907366460");
  const apexrole = message.guild.roles.cache.get("801311682135457823");
  const animerole = message.guild.roles.cache.get("801182356744175687");
  const rocketEmoji = message.guild.emojis.cache.get("801328282272268288");
  const apexEmoji = message.guild.emojis.cache.get("801328349237870633");
  const animeEmoji = message.guild.emojis.cache.get("801328362185555989");

  const embed = new MessageEmbed()
  .setTitle("AutoRôles")
  .setDescription("Cliquez sur les réactions ci-dessous afin de choisir vos roles")
  .setColor("#dc143c")
  .addField(
      "Les Rôles disponibles:",
      `
      ${rocketEmoji} - ${rocketrole.toString()}
      ${apexEmoji} - ${apexrole.toString()}
      ${animeEmoji} - ${animerole.toString()}
      `
  );

  client.channels.cache.get('801317200807329852').send(embed).then(async msg => {
      await msg.react(rocketEmoji);
      await msg.react(apexEmoji);
      await msg.react(animeEmoji);

  })

    };