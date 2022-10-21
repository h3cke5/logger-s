const Discord = require("discord.js")

module.exports = {
    name: "server",
    description: "﹝Information﹞Show Server Information❗",
    description_localizations: {"pt-BR":"﹝Informação﹞Mostra Informações Do Servidor❗"},
    options: [
        {
            name: 'info',
            description: '﹝Information﹞Show Server Information❗',
            description_localizations: {"pt-BR":"﹝Informação﹞Mostra Informações Do Servidor❗"},
            type: Discord.ApplicationCommandOptionType.Subcommand
        }
    ],

    run: async (client, interaction) => {

        let criacao_data = parseInt(interaction.guild.createdTimestamp / 1000)
        let server_icon = interaction.guild.iconURL({ dinamyc: true })
        if (server_icon) {

            interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dinamyc: true }) })
                        .setTitle(`🏠 - Serverinfo`)
                        .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                        .setColor("FF0000")
                        .addFields(
                            { name: `<:shield:996484344573067284> - Level De Verificação:`, value: `Level: **${interaction.guild.verificationLevel}**`, inline: true },
                            { name: `🌍 - Região:`, value: `${interaction.guild.region}`, inline: true },
                            { name: `💤 - Canal De AFK:`, value: `${interaction.guild.afkChannel}`, inline: true },
                            { name: `⛏ - Nível De Filtro De Conteúdo Explícito:`, value: `Level: **${interaction.guild.explicitContentFilter}**`, inline: true },
                            { name: `📆 - Data De Criação:`, value: `<t:${criacao_data}:R>`, inline: true },
                            { name: `👤 - Total De Membros:`, value: `Total: **${interaction.guild.memberCount}**`, inline: true },
                            { name: `📌 - NFA Level:`, value: `Level: **${interaction.guild.mfaLevel}**`, inline: true },
                            { name: `💬 - Canais:`, value: `Total: **${interaction.guild.channels.cache.size}**`, inline: true },
                            { name: `<:cargo:1014509980419891240> - Cargos:`, value: `Total: **${interaction.guild.roles.cache.size}**`, inline: true },
                            { name: `🔥 Emojis:`, value: `Total: **${interaction.guild.emojis.cache.size}**`, inline: true },
                            { name: `👑 - Owner`, value: `\`<@!${interaction.guild.ownerId}>\``, inline: true },
                        )
                ],
                components: [
                    new Discord.ActionRowBuilder()
                        .addComponents(
                            new Discord.ButtonBuilder()
                                .setStyle(5)
                                .setLabel(`Baixar Icone De: ${interaction.guild.name}`)
                                .setURL(server_icon),
                        )
                ],
            })
        } else {
            interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dinamyc: true }) })
                        .setTitle(`🏠 - Serverinfo`)
                        .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                        .setColor("FF0000")
                        .addFields(
                            { name: `<:shield:996484344573067284> - Level De Verificação:`, value: `Level: **${interaction.guild.verificationLevel}**`, inline: true },
                            { name: `🌍 - Região:`, value: `${interaction.guild.region}`, inline: true },
                            { name: `💤 - Canal De AFK:`, value: `${interaction.guild.afkChannel}`, inline: true },
                            { name: `⛏ - Nível De Filtro De Conteúdo Explícito:`, value: `Level: **${interaction.guild.explicitContentFilter}**`, inline: true },
                            { name: `📆 - Data De Criação:`, value: `<t:${criacao_data}:R>`, inline: true },
                            { name: `👤 - Total De Membros:`, value: `Total: **${interaction.guild.memberCount}**`, inline: true },
                            { name: `📌 - NFA Level:`, value: `Level: **${interaction.guild.mfaLevel}**`, inline: true },
                            { name: `💬 - Canais:`, value: `Total: **${interaction.guild.channels.cache.size}**`, inline: true },
                            { name: `<:cargo:1014509980419891240> - Cargos:`, value: `Total: **${interaction.guild.roles.cache.size}**`, inline: true },
                            { name: `🔥 Emojis:`, value: `Total: **${interaction.guild.emojis.cache.size}**`, inline: true },
                            { name: `👑 - Owner`, value: `\`<@!${interaction.guild.ownerId}>\``, inline: true },
                        )
                ],
                components: [
                    new Discord.ActionRowBuilder()
                        .addComponents(
                            new Discord.ButtonBuilder()
                                .setStyle(5)
                                .setLabel(`❌ | ${interaction.guild.name} Não Possui Um Icone❗`)
                                .setURL('https://discord.com/app')
                                .setDisabled(true)
                        )
                ],
            })
        }
    }
}