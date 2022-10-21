const dc = require('discord.js')

module.exports = {
    name: "bot-info",
    description: '﹝Information﹞See My Information❗',
    description_localizations: {"pt-BR":"﹝Informação﹞Veja Minhas Informações❗"},

    run: async (client, interaction) => {

        const botcor = interaction.guild.members.cache.get(client.user.id)
        const up = Math.floor(client.uptime / 60000) % 60;

        const b1 = new dc.ButtonBuilder()
        .setLabel(`Suporte`)
        .setEmoji('📗')
        .setStyle(5)
        .setURL(`https://discord.gg/gnesHVhjMC`)

        const b2 = new dc.ButtonBuilder()
        .setLabel(`Convide-Me`)
        .setEmoji('📗')
        .setStyle(5)
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)

        const botbutton = new dc.ActionRowBuilder().addComponents(b1).addComponents(b2)

        const botembed = new dc.EmbedBuilder()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setColor(`FF0000`)
            .setDescription(`**
            Informações Básicas
            > Servidores: ${client.guilds.cache.size}
            > Usuários: ${client.users.cache.size}
            > Ping: ${client.ws.ping}
            > Ram: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB'}\`
            > Dono: <@817378339228221440> \`[817378339228221440]\`

            Informações Avançadas
            > [Servidor De BotList E Suporte](https://teste.com)
            > Site: \`Em Breve...\`
            
            Informações Player
            > DJ's: \`0\`
            > Nodes:
            > \`\`\`Nome: Index | Região: EU\`\`\`**`)
            .setImage(``)
            .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })

             .setThumbnail(client.user.displayAvatarURL())
             .setTimestamp()

             interaction.reply({ embeds: [botembed], components: [botbutton]})
      
    }
}