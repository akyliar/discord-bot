const {MessageEmbed, MessageAttachment} = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dice.jpg');
const randomDice = () => Math.floor(Math.random() * 100) + 1;


module.exports.help = {
    name: 'dès',
    aliases: ["dès"],
    description: 'Renvoie la valeur du dès',
    cooldown: 5,
    usage: '',
    args: false
};

module.exports.run = (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor("#d54e12")
        .setTitle("Lancé de dès random")
        .attachFiles(diceImg)
        .setThumbnail('attachment://dice.jpg')
        .addFields(
            { name: 'numéro:', value: randomDice(), inline: true}
        )
        .setTimestamp()
        .setFooter("");
        
        message.channel.send(embed);
        
    }