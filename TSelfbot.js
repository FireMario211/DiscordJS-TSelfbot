/**

	TSelfbot By FireMario211
	   Version 1.1-beta.0
	       Github

**/
console.log('TSelfbot - Loading...')

const discord = require('discord.js') // discord.js
const bot = new discord.Client(); //discord client


let fs = require('fs') // file manager

var Jimp = require("jimp"); // image

const config = require('./config.json')

bot.login(config.token)


bot.on('error', e => {
	console.log("Error! " + e)
})

bot.on('ready', () => {
	console.log('TSelfbot is ready! You are ' + bot.user.username + '#' + bot.user.discriminator + ' and your on ' + bot.guilds.size + ' guilds!')

});

bot.on('message', message => {
    if(message.author.id !== bot.user.id) return;
    
    
    
	if (!message.content.startsWith(config.prefix)) return;


var crypto = require("crypto");
var rainbowhex = crypto.randomBytes(3).toString('hex');

	let command = message.content.split(" ")[0];
	command = command.slice(config.prefix.length);
console.log(message.author.tag + " you used " + command);
let args = message.content.split(" ").slice(1);

    var msgid;

    
    if (command === "lenny"){
        message.delete()
        message.channel.send(args.join(" ") + " ( ͡° ͜ʖ ͡°)")
    }
    
	if (command === "embed"){
        message.delete()

        if(config.rainbowembed === true){
    const embed = new discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor(rainbowhex)
    message.channel.send({embed, embed})
        	return
        }
        
    
    const embed = new discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor(config.favoritehexcolor)
    message.channel.send({embed, embed})
	}


	function doRandomSize(){
		var rand = [Jimp.FONT_SANS_64_BLACK]
		return rand[Math.floor(Math.random()*rand.length)];

	}

	if (command === "kill"){
		//Credit DavidThe$$$#9987 for the code
  let sabotage = args.join(' ');
  if (sabotage < 1) {
    return message.edit('Put something to kill, like mention a user, or use an emoji')
  }
  message.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`)
  setTimeout(function() {
    message.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`)
  }, 1000)
  setTimeout(function() {
    message.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`)
  }, 2000)
  setTimeout(function() {
    message.edit(`▄︻̷̿┻̿═━一 :boom:`)
  }, 3000)
  setTimeout(function() {
    message.edit(`▄︻̷̿┻̿═━一 :fire:`)
  }, 4000)
  setTimeout(function() {
    message.edit(`▄︻̷̿┻̿═━一 :skull:`)
  }, 5000)
}

	if (command === "fakevirus"){
		let virusname = args.join(' ');
		if(virusname < 1){
			return message.edit('Please type in a name for the virus')
		}
		message.edit({embed: new discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)})
  setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] - 1%').setColor(0xFF0000)})
  }, 1000)
  setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] / 2%').setColor(0xFF0000)})
  }, 2000)
    setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] - 2%').setColor(0xFF0000)})
  }, 3000)
  setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] \ 2%').setColor(0xFF0000)})
  }, 4000)
    setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] - 28%').setColor(0xFF0000)})
  }, 5000)
    setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] / 28%').setColor(0xFF0000)})
  }, 6000)


    setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 78%').setColor(0xFF0000)})
  }, 7000)
    setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ 78%').setColor(0xFF0000)})
  }, 8000)
    setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 78%').setColor(0xFF0000)})
  }, 9000)

     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 96%').setColor(0xFF0000)})
  }, 10000)
     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 96%').setColor(0xFF0000)})
  }, 11000)
     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ 96%').setColor(0xFF0000)})
  }, 12000)
     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 96%').setColor(0xFF0000)})
  }, 13000)
     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 96%').setColor(0xFF0000)})
  }, 14000)

     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 99%').setColor(0xFF0000)})
  }, 15000)
     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
  }, 16000)


     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] - 100%').setColor(0xFF0000)})
  }, 17000)
     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Stealing Token...').setColor(0xFF0000)})
  }, 19000)
    setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploading Token to sql://localhost:8080/encrypted_' + virusname + ".key").setColor(0xFF0000)})
  }, 22000)
    setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
  }, 25000)
    setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
  }, 26000)
     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
  }, 27000)
     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
  }, 28000)
     setTimeout(function() {
    message.edit({embed: new discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
  }, 29000)
     setTimeout(function() {
    message.edit(':boom: :boom: :boom: :boom: :boom: :boom: :boom: :boom: :boom:')
  }, 30000)



	}



	if (command === "sad"){

		if(!args[0]){
			return;
		}
message.channel.startTyping()
var url = message.author.avatarURL;

Jimp.read(url).then(function (image) {

image.resize(1024, 1024, Jimp.RESIZE_BEZIER);


	Jimp.loadFont(doRandomSize()).then(function (font) { // load font from .fnt file
	            // print a message on an image
	    //image.print(font, 2, 2, args.join(" "), Jimp.ALIGN_FONT_CENTER); // print a message on an image with text wrapped at width


			image.greyscale()


    /**image.greyscale()**/image.print(font, 20, 960, args.join(" "), Jimp.ALIGN_FONT_CENTER).getBuffer(Jimp.MIME_JPEG, onBuffer)




		let outputfile = "./output/" + Math.random().toString(36).substr(2, 5) + "sad." + image.getExtension(); // create a random name for the output file
		image.write(outputfile, function() {
															// upload file
															message.channel.sendFile(outputfile).then(function() {
															// delete file
															fs.unlink(outputfile);
															console.log("SUCCESS: " + message.author.username);
															message.channel.stopTyping()
															});
														});

		});




}).catch(function (err) {
    console.error(err);
})

function onBuffer(err, buffer) {
    if (err) throw err;
    console.log(buffer);
}
	}

	if (command === "text"){
		let user = message.mentions.users.first();
		if(!user) return message.edit("Please mention the user you want to put text on!")
		if (user < 1) return message.edit("Please mention the user you want to put text on!")
		if(!args[1]){
			message.edit("Please type something")
			return;
		}

let testingtxt = args.splice(1).join(' ');

message.channel.startTyping()
var url = user.avatarURL;

Jimp.read(url).then(function (image) {

image.resize(1024, 1024, Jimp.RESIZE_BEZIER);


	Jimp.loadFont(doRandomSize()).then(function (font) { // load font from .fnt file
	            // print a message on an image
	    //image.print(font, 2, 2, args.join(" "), Jimp.ALIGN_FONT_CENTER); // print a message on an image with text wrapped at width





    /**image.greyscale()**/image.print(font, 20, 960, testingtxt, Jimp.ALIGN_FONT_CENTER).getBuffer(Jimp.MIME_JPEG, onBuffer)


		//image.mask(image, 100, 100).getBuffer(Jimp.MIME_JPEG, onBuffer);
		let outputfile = "./output/" + Math.random().toString(36).substr(2, 5) + "." + image.getExtension(); // create a random name for the output file
		image.write(outputfile, function() {
															// upload file
															message.channel.sendFile(outputfile).then(function() {
															// delete file
															fs.unlink(outputfile);
															console.log("SUCCESS: " + user.username);
															message.channel.stopTyping()
															});
														});

		});


}).catch(function (err) {
    console.error(err);
		message.reply("Error, Could be that your avatar is invalid OR your avatar has something like <>.")
})

function onBuffer(err, buffer) {
    if (err) throw err;





    console.log(buffer);

}
	}




	if (command === "8ball"){
       
		message.channel.sendEmbed(new discord.RichEmbed().setDescription(':question: Question: **' + args.join(" ") + '**\n:8ball: Your answer is: **' + magic8ball() + '**').setColor(config.favoritehexcolor));
	}



	if (command === "dice"){
        
		message.channel.sendEmbed(new discord.RichEmbed().setTitle("You rolled a " + doRoll() + "!").setColor(config.favoritehexcolor))
	}

    if (command === "setgame"){
        if(!args[0]){
            message.edit("Please type in a game!")
        }
        bot.user.setGame(args.join(" "))
        message.edit("Set game! However, you cannot see the game because you are logged in! Others can!")
    }

	if (command === "ascii"){
        var figlet = require('figlet');
        figlet(args.join(" "), function(err, data) {
            if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
            message.delete()
    message.channel.send("```\n" + data + "\n```")
});


	}





if (command === "help"){
    message.delete()
	message.channel.sendEmbed(new discord.RichEmbed().setTitle("Command List").setColor(0xADD8E6).addField(config.prefix + "help", "You're in it right now! Shows a list of commands!").addField(config.prefix + "embed", "Says what you say, but in embed!").addField(config.prefix + "ascii", "Shows your message that you typed with Ascii! (Limit is 16, if you go above the limit it will look like someone messed it up)").addField(config.prefix + "eval", "Evaluate code! **Could be VERY dangerous to run scripts from others**").addField(config.prefix + "setgame", "Sets your game!").addField(config.prefix + "8ball", "Tells your future."))
}













	function magic8ball() {
		var rand = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes, definitely.', 'You may rely on it.', 'As I see it, yes', 'Most likely', 'Outlook good.', 'Yes!', 'Signs point to yes', 'Reply hazy try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no', 'My sources say no.', 'Outlook not so good.'];

		return rand[Math.floor(Math.random()*rand.length)];
}



function doRoll(){
	var rand = ['1', '2', '3', '4', '5', '6', '7', '8']
	return rand[Math.floor(Math.random()*rand.length)];

}

      if(command === "ping"){
          message.delete()
          message.channel.sendEmbed(new discord.RichEmbed().setTitle(":ping_pong: Pong! " + bot.ping.toFixed() + " ms.").setColor(config.favoritehexcolor))
      }
    

      if (command === "eval"){



  try {

    var code = args.join(" ");
    var evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
      
   // if(!message.member.hasPermission('EMBED_LINKS')){
     //   message.edit("Since you do not have permissions: `EMBED_LINKS` The bot cannot Send Embeds! Instead you will use Code Blocks::inbox_tray: **INPUT**\n```js\n" + args.join(" ") + "\n```\n:outbox_tray: **OUTPUT**\n```\n" + clean(evaled) + "\n```")
		//		return;
   // }
        
      
      
    //message.channel.send(":inbox_tray: **INPUT**\n")
      let e = new discord.RichEmbed().addField("Javascript Eval:", "Success!").addField(":inbox_tray: **INPUT**", "```" + args.join(" ") + "```").addField(":outbox_tray: **OUTPUT**", "```" + clean(evaled) + "```").setColor(config.favoritehexcolor).setFooter("Eval command made by FireMario211")
    message.channel.send({embed: e})
    //message.channel.sendCode("xl", args.join(" "));
    //message.channel.send(":outbox_tray: **OUTPUT**\n")

    //message.channel.sendCode("xl", clean(evaled));

  } catch (err){

    message.channel.sendEmbed(new discord.RichEmbed().addField("Javascript Eval ERROR:", "There was a problem with the code your trying to run!").addField("Error", "```" + clean(err) + "```").setColor(0xFF0000))
    //message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
}
function clean(text) {
	if (typeof(text) === "string")
		return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
}

});
