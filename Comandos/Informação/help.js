const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageActionRow} = require('discord.js')

module.exports = {

name: 'help',
description: '﹝Information﹞ Display My Help Panel❗',
description_localizations: {"pt-BR":"﹝Informação﹞ Exibe Meu Painel De Ajuda❗"},
type: ApplicationCommandType.ChatInput,

run: async (client, interaction, args) => {

    let embed = new EmbedBuilder()
    .setThumbnail(`https://i.imgur.com/FXky6MO.jpg`)
    .setTitle(`¡Painel De Ajuda ${client.user.username}!`)
    .setDescription(`
    > Olá ${interaction.user}, Meu Prefixo É: \`/\`
    > Como Configuro O Logger's?
    > Use: \`/help guide\` (Para Um Breve Guia De Configuração❗) \`(FUTURAMENTE)\`
    
    ***__Open Source | DashBoard__***
    > \`FUTURAMENTE\` | \`FUTURAMENTE\`

    ***__Privacy Policy__***
    > Você Pode Ver A Política De Privacidade **[Aqui](https://gist.github.com/h3cke5/a6d1dc6db4ae623864fd3dc42a25045a)**. 
    > Se Você Quiser Atualizações Quando Mudar, 
    > Entre No Meu **[Servidor De Suporte](https://discord.gg/gnesHVhjMC)** E Siga O Canal: #privacy-policy. \`(FUTURAMENTE)\`
    
    ***Action Log - Events***
    ***Escolha Quais Eventos Serão Registrados.***
    ***__Message Events__***
    > \`MESSAGE DELETE\` | \`MESSAGE EDIT\` | \`IMAGE DELETE\`
    > \`LOG INVITES/INVITE INFO\` | \`MODERATOR COMMANDS\`

    ***__Member Events__***
    > \`MEMBER JOIN\` | \`MEMBER LEAVE\` | \`MEMBER ROLE ADD\` | \`MEMBER ROLE REMOVE\`
    > \`NICKNAME CHANGE\` | \`MEMBER BAN\` | \`MEMBER UNBAN\`

    ***__Role Events__***
    > \`ROLE CREATE\` | \`ROLE DELETE\` | \`ROLE UPDATE\`

    ***__Channel Events__***
    > \`CHANNEL CREATE\` | \`CHANNEL DELETE\`

    ***__Voice Events__***
    > \`VOICE CHANNEL JOIN\` | \`VOICE CHANNEL LEAVE\` 
    > \`VOICE CHANNEL MOVE\`

    ***__TICKET's__***
    > Use: \`/setup-ticket\` Para Configurar Os Tickets❗ \`(INDISPONIVEL)\`

    ***___Outros:___***
    > **Acesse Meu Website Apertando: [AQUI](https://dsc.gg/loggers)**
    > **Me Adicione Em Seu Servidor: [AQUI](https://dsc.gg/loggers)**
    > **Entre No Meu Servidor De Suporte: [AQUI](https://discord.gg/gnesHVhjMC)**`)
    .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setColor('FF0000')

interaction.reply({ embeds: [embed], ephemeral: true})
}
}