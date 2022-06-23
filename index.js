const Discord = require("discord.js");
const client = new Discord.Client({ intents: 7753 });
const fs = require("fs");
const config = require("./config.json");
client.config = config;

console.log('Loading...')
//events
fs.readdir("./events/", (_err, files) => {
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`[✅]  Event Loaded: ${eventName}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

//commands

client.commands = new Discord.Collection();
fs.readdir("./commands/", (_err, files) => {
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, {
      name: commandName,
      ...props
    });

    console.log(`[✅] Command Loaded: ${commandName}`);
  });
});

//slash
client.interactions = new Discord.Collection();
client.register_arr = []
fs.readdir("./slash/", (_err, files) => {
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./slash/${file}`);
    let commandName = file.split(".")[0];
    client.interactions.set(commandName, {
      name: commandName,
      ...props
    });
    client.register_arr.push(props)
  });
});


//login
client.login(config.token);
