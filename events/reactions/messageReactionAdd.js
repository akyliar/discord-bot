const { MessageReaction } = require("discord.js");

module.exports = (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(c => c.id === '801317200807329852');
    const rocketrole = message.guild.roles.cache.get("801311608907366460");
    const apexrole = message.guild.roles.cache.get("801311682135457823");
    const animerole = message.guild.roles.cache.get("801182356744175687");
    if (member.user.bot) return;

    if (["rocketleague","apexlegend","anime"].includes(emoji) && message.channel.id === channel.id) {
        switch (emoji) {
            case "rocketleague":
                member.roles.add(rocketrole);
                message.channel.send(`Le Rôle ${rocketrole.name} a été ajouté avec succès !`);
                break;
            
            case "apexlegend":
                member.roles.add(apexrole);
                message.channel.send(`Le Rôle ${apexrole.name} a été ajouté avec succès !`);
                break;
            case "anime":
                member.roles.add(animerole);
                message.channel.send(`Le Rôle ${animerole.name} a été ajouté avec succès !`);
                break;    
        }
    }
}