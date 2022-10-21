const Discord = require('discord.js')

module.exports = {
    name: 'server-list',
    description: '﹝Information﹞List of My Servers❗',
    description_localizations: {"pt-BR":"﹝Informação﹞Lista Dos Meus Servidores❗"},
    ownerOnly: true,
    run: async (client, interaction, args) => {

        client.guilds.cache.map(g => interaction.user.send({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor('FF0000')
                    .setDescription(`↪️ **| ServerName:** ${g.name} **ServerID:** ${g.id}`)
            ],
        }))
        interaction.user.send({
            components: [
                new Discord.ActionRowBuilder()
                .addComponents(
                    new Discord.ButtonBuilder()
                    .setCustomId('clear_dm')
                    .setLabel('Clear DM')
                    .setStyle(Discord.ButtonStyle.Danger)
                )
            ],
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor('FF0000')
                    .setDescription(`*Totalizando ${client.guilds.cache.size} Servidores*`)
                    .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            ],
        })
        interaction.reply({
            content: `✅ | ${interaction.user}, *Verifique Seu Privado❗*`,
            ephemeral: true,
        })
    }
}