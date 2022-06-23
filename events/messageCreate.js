db = require("megadb")
blacklist = new db.crearDB("blacklist");
module.exports = (client, message) => {
    if (message.author.bot) return;
  
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  

    const cmd = client.commands.get(command);
  
    if (!cmd) return;
    if (blacklist.has(message.author.id)) return message.channel.send({ content: `:x: | You are blacklisted from ${client.user.username}`});
  
    cmd.run(client, message, args);

};
