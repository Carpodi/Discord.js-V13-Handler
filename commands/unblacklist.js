const Discord = require("discord.js");
db = require("megadb")
blacklist = new db.crearDB("blacklist");

module.exports.run = async (client, message, args) =>  {
        if(message.author.id !=='YOUR-ID') 
        return message.channel.send(`${message.author}, This command is only allowed to be used by <YOU>`);
        let user = message.mentions.members.first()
        if(!user) return message.channel.send('Mention someone.')
      
    const noob = blacklist.has(user.id) 
    if (!noob) return message.channel.send({content: "User is not blacklisted."})

      blacklist.eliminar(user.id, user.user.tag)
      message.channel.send({content:"User "+user.user.username+ 'unblacklisted.'})
         }
        
      
