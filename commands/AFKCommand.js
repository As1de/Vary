const Discord = require("discord.js");
const database = require("../database.js")
exports.run = async ({vary, message, args}, t) => {
    db.Users.findOne({userID: message.author.id}, (err, user) =>{
        if (user) {
              if(args[0] === "enable" || args[0] === "ativar"){
            user.AFK = true
            message.reply('Modo AFK ativado!')
            user.save();
            ;
     }
  } else {
            message.channel.send('Parece que sua conta não foi registrada na minha database, peça a um dos meus desenvolvedores para o registrar')
        }
        });
  }

exports.config = {
    name: 'ping',
    aliases: ['pong']
}