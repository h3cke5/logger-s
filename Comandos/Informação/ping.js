const Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "﹝Information﹞Shows Current Latency❗",
  description_localizations: {"pt-BR":"﹝Informação﹞Mostra A Latencia Atual❗"},
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;

    let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}, Meu Ping Está Em: \`Calculando...\`.`)
    .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setColor("FF0000");

    let embed_2 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}, Meu Ping Está Em: \`${ping}ms\`.`)
    .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setColor("FF0000");

    interaction.reply({ embeds: [embed_1] }).then( () => {
        setTimeout( () => {
            interaction.editReply({ embeds: [embed_2] })
        }, 2000)
    })
  }
}