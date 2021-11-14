const { Client , Intents , Collection}  = require('discord.js')
const client = new Client({intents:32767})

client.once('ready',()=>{
    console.log("봇이 준비되었습니다")
})

client.on('messageCreate' , message=>{
    if(message.content == "핑"){
        message.reply("퐁")
    }
})

client.login("ODc1OTczNDIwMTU4OTc2MDYw.YRdT0g.tsQeE0dUSJl0x1xNRZdj5IjM1VQ")