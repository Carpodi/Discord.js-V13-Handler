const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  let m = await message.reply("Checking websocket...")
  let pong = new Discord.MessageEmbed()
    .setTitle("Client's Ping")
    .setColor('#2F3136')	
    .setTimestamp()
    .addField("Bot latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
    .setFooter({
      text: `Requested by ${message.author.tag}`, 
      iconURL: message.author.displayAvatarURL()
      });
     m.delete()
  message.reply({embeds: [pong] })
}
