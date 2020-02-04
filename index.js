const tmi = require('tmi.js');

const options = {
    
    options: {
        debug:  true,
    },

    connection: {
        cluster: 'aws',
        reconnect: true,
    },

    identity: {
        username: 'testbotforproj',
        password: 'oauth:d6c52oidu7bn745ofrz0yfnfb2crri',
    },

    channels: ['g8t0rboy'],

};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address,port) => {
    client.action('g8t0rboy', 'Suprise! I connected');
});