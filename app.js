const Discord = require('discord.js');
const client = new Discord.Client();
console.log('Connecting...');
//Crash haltings
process.on('uncaughtException', err => {
    console.log(`Process Error: \n${err}`);
});
client.on('warn', info => {
    console.log(`D.js Warning: \n${info}`)
});
process.on('unhandledRejection', (reason) => {
    console.log(`Unhandled Promise Rejection: \n${reason}`);
});
client.on('ready', () => {
    client.user.setPresence({ 
  status: 'online',
  game: { 
     type: 0,
     name: `${config.name}`,
     state: `${config.state}`,
     details: `${config.subText}`,
     application_id: `${config.applicationID}`,
     assets: { 
        small_image: `${config.smallImgID}`,
        small_text: `${config.smallImgText}`,
        large_image: `${config.largeImgID}`,
        large_text: `${config.largeImgText}` } 
    }
    });
    console.log(`Discord ban requested`);
});
client.login(`${config.token}`);