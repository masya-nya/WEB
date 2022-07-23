const { Telegraf } = require('telegraf')
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}`))
bot.help((ctx) => ctx.reply(text.commands))
bot.command('')
bot.launch()

//5464881773:AAH2OabNeZ0RMZPsq_MvGxUzW77hyWkU_7E
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))