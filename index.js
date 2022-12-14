const Discord = require("discord.js")
const client = new Discord.Client({ intents: [ 32512 ] });
const { QuickDB } = require("quick.db")
const config = require("./config.json")
client.login(config.token)
require('./Handler')(client)
const db = new QuickDB()

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`β | Ocorreu Um Erro. Tente Novamenteβ`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})

client.on("ready", async() => {
    console.log(`π | Estou Online Em: ${client.user.username}β`)
  
    const atividade = [{name: `β β BETA`, type: 2}, {name: `π β Log's`, type: 3}];
    const status = [`idle`]; //online π’, idle π‘, dnd π΄
  
    let random1 = 0;
    setInterval(() => {
        if(random1 >= atividade.length) random1 = 0
  
        client.user.setActivity(atividade[random1])
        random1++ }, 10000) //Tempo Em MS
  
    let random2 = 0;
    setInterval(() => {
        if(random2 >= atividade.length) random2 = 0
  
        client.user.setStatus(status[random2])
        random2++ }, 25000) //Tempo Em MS
})

client.slashCommands = new Discord.Collection()
