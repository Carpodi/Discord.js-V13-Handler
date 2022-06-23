const register = require('../async/cmdasync');
module.exports = async (client) => {
  await register(client, client.register_arr.map((command) => ({
    name: 'ping',
    description: 'Check the websocket ping',
    options: command.options,
    type: 'CHAT_INPUT'
  })), {
  });
  console.log(`[✅]  Slash Commands - Sucessfully loaded`)
  console.log(`[CLIENT] ${client.user.tag} sucessfully conected!`);
  const activities = [`Activity1`, `Activity2`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "WATCHING" });
  }, 20000);

};
