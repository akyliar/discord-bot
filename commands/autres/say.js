module.exports.help = {
    name: 'say',
    aliases: ["say"],
    description: 'répète le message',
    cooldown: 0,
    usage: '<votre_message>',
    args: true
};

module.exports.run =(client, message, args) => {
    message.channel.send(args.join(""));
    };