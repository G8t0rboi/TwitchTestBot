const tmi = require('tmi.js');
const robot = require('robotjs');

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

client.on('chat', (channel, user, message, self) => {
    if ( message === 'hello' ) {
            client.action('g8t0rboy','Hello' + user.username );

    }
});

client.on('chat', (channel, user, message, self) => {
    if ( message === 'jump' ) {
        robot.keyTap("space");
        client.action('g8t0rboy', 'Jumped!');
    }

    if ( message === 'left' ) {
        robot.keyToggle("a", 'down');
        client.action('g8t0rboy', 'Leftward!');
    }
    
    if ( message === 'right' ) {
        robot.keyToggle("d", 'down');
        client.action('g8t0rboy', 'Rightward!');
    }

    if ( message === 'back' ) {
        robot.keyToggle("s", 'down');
        client.action('g8t0rboy', 'Backward!');
    }

    if ( message === 'forward' ) {
        robot.keyToggle("w", 'down');
        
        client.action('g8t0rboy', 'Forward!');
    }

});

client.on('chat', (channel, user, message, self) => {
    if ( message === 'sprint' ) {
    robot.keyToggle("shift", 'down');
    
    client.action('g8t0rboy', 'Sprint is on!');
    }
});

client.on('chat', (channel, user, message, self) => {
    if ( message === 'crouch' ) {
    robot.keyToggle("control", 'down');
    
    client.action('g8t0rboy', 'Crouching!');
    }
});


