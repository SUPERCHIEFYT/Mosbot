const Discord = require('discord.js'),
    pageemo = ["🛠", "🎉", "❔", "🔠", "🎲"];


const pages = [
	{
		title: "test1",
		description: `
YOYOYOYO THIS IS A TEST`,
	},
	
	{
		title: "test2",
		description: `
YOYOYOYO THIS IS A **TEST2**`,
	},
	
    	{
		title: "test3",
		description: `
**YOYOYOYO** THIS IS A TEST3`,
	},
	
	{
		title: "test3",
		description: `
**YOYOYOYO** THIS IS A TEST3`,
	},
	
	{
		title: "test3",
		description: `
**YOYOYOYO** THIS IS A TEST3`,
	},
]
let page = 1; 

reactArrows(arrow) {
   if (arrow === 6) return;
  this.msg.react(reactions[arrow]).then(_ => {
     this.reactArrows(arrow + 1);
  }).catch(
     e => console.error(`Reaction Error: ${e}`)
  );
}

module.exports.run = (bot, message, args) => {
    message.delete(500).catch();
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(pages[page - 1].title)
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page - 1].description);

    message.channel.send(embed).then(msg => {
	handleReaction(reaction) {
		// console.log(`${reaction.emoji.name} from ${reaction.users.last().username}`);
		reaction.remove(reaction.users.last()).catch(e => {
		    if (e.code === 50013) reaction.message.channel.send("I need the 'Manage Messages' permission in order to work properly!");
		});
		const rid = pageemo.indexOf(reaction.emoji.name);
		embed.setColor("RANDOM")
		embed.setTitle = pageemo[rid].title
		embed.setDescription = pageemo[rid].description
		msg.edit(embed)
	}
	reactArrows(0)
	this.collector = msg.createReactionCollector((reaction, user) => {
            return user.id !== msg.client.user.id && reactions.includes(reaction.emoji.name);
        });
	let self = this;
        this.collector.on("collect", (reaction) => {
            self.handleReaction(reaction);
        }); 
    });
};

module.exports.help = {
    name: "help1"
}
