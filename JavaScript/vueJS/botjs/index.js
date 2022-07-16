const { Telegraf } = require('telegraf')

const bot = new Telegraf('5464881773:AAH2OabNeZ0RMZPsq_MvGxUzW77hyWkU_7E')

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('Стикер!'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

//5464881773:AAH2OabNeZ0RMZPsq_MvGxUzW77hyWkU_7E