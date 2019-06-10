const Discord = require('discord.js')
const config = require('../config.json')
const db = require("../database.js")

exports.run = async (vary, message, args) => {
   if (!['375627393773207554', '268526982222970880', '485837271967465472'].includes(message.author.id)) {
    return message.reply('apenas' +
            ' os meus' +
            ' desenvolvedores têm a permissão de executar este comando!')
  }
  const util = require('util')
  let code = args.join(' ')
  if (!code) return message.channel.send(`${message.author}, não encontrei nenhum código.`)
  try {
    let ev = eval(code)
    let str = util.inspect(ev, {
      depth: 1
    })
    str = `${str.replace(new RegExp(`${vary.token}|${process.env.TOKEN}`, 'g'), 'undefined')}`
    if (str.length > 1800) {
      str = str.substr(0, 1800)
      str = str + '...'
    }
    message.channel.send(`\`\`\`js\n${str}\`\`\``)
  } catch (err) {
    let errembed = new Discord.RichEmbed()
      .setTitle('Whoops!')
      .setDescription(`\`\`\`js\n${err}\`\`\``)
      .setColor('#ff0200')

    message.channel.send(errembed)
  }
}

exports.config = {
    name: 'eval',
    aliases: []
}