const Discord = require("discord.js");
const config = require("../index.js");
db = require("megadb")
blacklist = new db.crearDB("blacklist");
   
module.exports.run = async (client, message, args) => {
  if(message.author.id !=='YOUR-ID') 
  return message.channel.send(`${message.author},Sorry! You are not allowed to use this command.`);
  let user = message.mentions.members.first()
  if(!user) return message.channel.send('Mention someone to blacklist.')
  if(blacklist.has(user.id)) return message.channel.send({content: "User already blacklisted"})

blacklist.establecer(user.id, user.user.tag)
message.channel.send({content:`User ${user.user.username} has been blacklisted.`})

}

