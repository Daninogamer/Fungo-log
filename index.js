const Discord = require("discord.js");
const colors = require("colors")
const client = new Discord.Client({
  presence: {
    status: "dnd",
    activity: {
      name: "I_Two_Dani",
      type: "STREAMING",
      url: "https://www.twitch.tv/i_two_dani"
    }
  }
});

client.login(process.env.token);

client.on("ready", ()=>{
  console.log(`${client.user.tag} è online! Il prefisso è: ${client.config.prefix}`.bgGreen);
  //client.user.setActivity("Hello world", {type: "STREAMING", url: "https://twitch.tv/#"})
})

require("./logger")(client);
//const logger = require("./logger");
//logger(client)
