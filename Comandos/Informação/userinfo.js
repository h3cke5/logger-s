const Discord = require("discord.js")
const { profileImage } = require("discord-arts");

module.exports = {
    name: 'user',
    description: 'SubCommand❗',
    description_localizations: {"pt-BR":"SubCommand❗"},
    options: [
            {
                name: 'info',
                description: '﹝Information﹞See Some User Information❗',
                description_localizations: {"pt-BR":"﹝Informação﹞Veja Informações De Algum Usuário❗"},
                type: Discord.ApplicationCommandOptionType.Subcommand,
                options: [{
                    name: 'user',
                    description: 'Select A User, Or Submit An ID❗',
                    description_localizations: {"pt-BR":"Selecione Um Usuário, Ou Envie Um ID❗"},
                    type: Discord.ApplicationCommandOptionType.User,
                    required: false
                }],
            },
    ],
    run: async(client, interaction) => {

        switch (interaction.options.getSubcommand()) {
            case 'info': {
                let userInfo = interaction.options.getUser('user') || interaction.user
                let data = userInfo.createdAt.toLocaleDateString("pt-br");
                await interaction.deferReply();
                let bufferImg = await profileImage(userInfo);
                let imgAttachment = new Discord.AttachmentBuilder(bufferImg, { name: "profile.png"});
                let embedInfo = new Discord.EmbedBuilder()
                    .setColor('FF0000')
                    .setAuthor({ name: `${userInfo.username}`, iconURL: userInfo.displayAvatarURL({ dynamic: true }) })
                    .setImage(`attachment://profile.png`)
                    .setFooter({ text: `Requesitado Por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                    .setFields(
                        {
                            name: '<:Icon_ChannelText:1022780308145307670> | Tag',
                            value: `\`${userInfo.tag}\``,
                            inline: true
                        },
                        {
                            name: '<:IconID:996654966867513406> | ID',
                            value: `\`${userInfo.id}\``,
                            inline: true
                        },
                        {
                            name: '<:Date:1022780283512172614> | Criação Da Conta',
                            value: `\`${data}\``,
                            inline: false
                        }
                    )

                    interaction.followUp({ files: [imgAttachment], embeds: [embedInfo] }).catch( () => {
                        interaction.reply({ content: `❌ ‣ Erro Ao Processar Comando❗`, ephemeral: true })
                    })

                

                break;
            }
        }

    }
}