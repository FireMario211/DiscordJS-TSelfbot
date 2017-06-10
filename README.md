# DiscordJS-TSelfbot
A Discord.JS Selfbot with features! Like seeing your status and seeing who is recommended to be a friend (well if you want to add random people, I dont know), You can also add your own prefix! and add your own embed!

# Requirements
You will need NodeJS the latest version, and you will need the latest version of **Discord.JS@11.1.0** or **Discord.JS@latest**
Secondly, you will need these Node Modules:
**discord.js**
**node-opus**
**jimp**
**ytdl-core**

# Music Bot Requirements
In order to actually play music, you will need FFMPEG, you will also need these node modules: node-opus, ytdl-core

# How to install these modules?
Firstly you will need to go into the TSelfBot directory in command prompt and type this in:
```
npm install --save discord.js@11.1.0
npm install node-opus
npm install ytdl-core
npm install jimp
```

# When I run it it doesn't work
Probably you didn't put your `token` in, in order to find your token, in browser or desktop, please hold `CTRL+SHIFT+I` then let go, you will then see Inspect Element, Click on Application from the top (or the 2 arrows if your monitor is short then click Applications) then once your there, Click on **Local Storage** then click on `https://discordapp.com` and then scroll down and you will see your token! Double click on the string then hold `CTRL+C` then you have copied it! Then put it in your `config.json` and run the bot! One warning, **Do not share your token with ANYONE, They can use it to login and probably leave all your servers or ban everyone that your staff on, Hope you understand the concequences, If somehow someone got your token, you can change it by changing your password, that is all bye!**

# config.json

**Change Token**
If you want to put your `token` in the `config.json` firstly you will have to open the config.json and put your token in the "token"
then it should look like this: (but the token is cut out because of reasons)
```
{
    "token": "mfa.XMZCD-tsVP",
    "prefix": "T!",
    "favoritehexcolor": "0x00FF00"
}
```

**Change Prefix**
If you want to change the `prefix`, go into the `config.json` and look for "prefix": "T!", and change the T! to whatever prefix you want!

**Change Favorite Color**
If you want to change the `embed` for your favorite color, you first have to open the `config.json` and search (your color) hex code and copy the hex code and paste it, do not remove the 0x or problems will occur, Here is an example of a hex code: 
`"favoritehexcolor": "0xFFFF00"` that is Yellow if you are wondering.


# Conclusion
Then your finished! Just run the run.bat and then your in! Just type T!help and see the commands then use them!
