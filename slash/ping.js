const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'ping',
    description: 'Check my ping!',
    run: async (client, interaction) => {
      let pembed = new MessageEmbed()
		  .setColor('#2F3136')	
		  .setTitle('Client Ping')
		  .addField('**Latency**', `\`${Date.now() - interaction.createdTimestamp}ms\``)
		  .setTimestamp()
                  .setFooter({
                     text: `${interaction.user.username}`,
                     iconURL: interaction.user.displayAvatarURL()
                  })
        interaction.reply({
          embeds: [pembed]
        });
    },
};
