const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");

module.exports = {
	name: 'avatar',
    aliases: ['profilepic', 'pfp', 'av'],
	description: 'Ảnh đại diện của',
    execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 });
		
        const embed = new EmbedBuilder()
            .setColor('#FFB6C1')
            .setTitle(`${user.username}'s Avatar`)
            .setImage(avatar);

		
		
		
		message.reply({ embeds: [embed] });
	},
};

