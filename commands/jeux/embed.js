const {MessageEmbed} = require("discord.js");


module.exports.help = {
    name: 'embed',
    aliases: ["embed"],
    description: 'Renvoie un embed.',
    cooldown: 0,
    usage: '',
    args: false
};

module.exports.run = (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor("#dc143c")
        .setTitle("Titre de l'embed")
        .setURL("https://google.com")
        .setDescription("Description de l'embed")
        .setThumbnail(client.user.displayAvatarURL())
        .addField("je suis un champ", "et je suis sa valeur")
        .addFields(
            { name: 'je suis le champ 1', value: 'et je suis sa valeur', inline: true},
            { name: 'je suis le champ 2', value: 'et en plus on est aligné', inline: true}
        )
        .setImage(client.user.displayAvatarURL())
        .setTimestamp()
        .setFooter("je suis sur le pied du footer");
        
        message.channel.send(embed);
        
    }