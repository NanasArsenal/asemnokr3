const qrcode = require('qrcode-terminal');
const axios = require('axios');

const { Client , LocalAuth} = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('message' , message => {
    if(message.body.toUpperCase() === 'HELLO' || message.body.toUpperCase() ==='HI'){
        message.reply('Hey there, I am Asem Nokr3 an AI fact checking chatbot');
        message.reply('I am here to help you get your facts right');
        message.reply('SEND "TEXT" or "text" if what you want to check is in a text format');
        message.reply('SEND "IMG" if what you want check is an image.')
    }
    if(message.body.toUpperCase() === 'TEXT'){
        message.reply('Send me your text message')
    }

} )

client.on('message', message =>{
    message.reply('Standby I am checking it and I will be with you')

    // const clientMessage = message;
    // const isFactual = await axios.post('',{result:  result});
})


client.initialize();
