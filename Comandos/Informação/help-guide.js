const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageActionRow} = require('discord.js')

module.exports = {

name: 'help-guide',
description: '﹝Information﹞ Display My Help Panel❗',
description_localizations: {"pt-BR":"﹝Informação﹞ Exibe Meu Painel De Ajuda❗"},
type: ApplicationCommandType.ChatInput,

run: async (client, interaction, args) => {

    let embed = new EmbedBuilder()
    .setThumbnail(`https://i.imgur.com/FXky6MO.jpg`)
    .setTitle(`¡Painel De Ajuda ${client.user.username}!`)
    .setDescription(`**FUTURAMENTE**`)
    .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setColor('FF0000')

interaction.reply({ embeds: [embed], ephemeral: true})
}
}