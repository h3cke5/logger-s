const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageActionRow} = require('discord.js')

module.exports = {

name: 'logs',
description: '﹝Settings﹞ Configure Log❗',
description_localizations: {"pt-BR":"﹝Definições﹞ Configure Log❗"},
type: ApplicationCommandType.ChatInput,

run: async (client, interaction, args) => {

    let embed = new EmbedBuilder()
    .setTitle(`¡Sistema Log's ${client.user.username}!`)
    .setDescription(`Olá ${interaction.user}, O Sistema De Log's Foi: \`Ativado\`❗`)
    .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setColor('FFFFFF')

interaction.reply({ embeds: [embed], ephemeral: true})
}
}