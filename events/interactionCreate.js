db = require("megadb")
blacklist = new db.crearDB("blacklist");
module.exports = (client, interaction) => {
       if (interaction.isCommand()) {
   
       const command = client.interactions.get(interaction.commandName);
   
       if (!command) return interaction.reply({
         content: "Something Went Wrong, check the console for details.",
         ephemeral: true
       });
       if (blacklist.has(interaction.member.id)) 
       return interaction.reply({
        content: `:x: You are blacklisted from ${client.user.username}`,
        ephemeral: true
      });
     command.run = async (client, interaction);
  
     }
   }