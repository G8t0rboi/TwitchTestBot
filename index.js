const tmi = require('tmi.js');
const robot = require('robotjs');

var leftOn = false;
var rightOn = false;
var forwardOn = false;
var backwardOn = false;
var sprintOn = false;
var crouchOn = false;
var attackOn = false;
var mineOn = false;

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
            client.action('g8t0rboy','Hello ' + user.username + " enjoy the stream!");

    }
});

client.on('chat', (channel, user, message, self) => {
    if ( message === 'jump' ) {
        robot.keyTap("space");
        client.action('g8t0rboy', 'Jumped!');
    }

    if ( message === 'left' && rightOn === false) {
        robot.keyToggle("a", 'down');
        leftOn = true;
        client.action('g8t0rboy', 'Leftward!');
    }
    else if ( leftOn === true ) {
        robot.keyToggle('a', 'up');
        leftOn = false;
        client.action('g8t0rboi', 'Not Leftward!');
    }
    
    if ( message === 'right' && leftOn === false) {
        robot.keyToggle("d", 'down');
        rightOn = true;
        client.action('g8t0rboy', 'Rightward!');
    }
    else if ( rightOn === true ) {
        robot.keyToggle('d', 'up');
        rightOn = false;
        client.action('g8t0rboy', 'Not Rightward!');
    }

    if ( message === 'back' && forwardOn === false) {
        robot.keyToggle("s", 'down');
        backwardOn = true;
        client.action('g8t0rboy', 'Backward!');
    }
    else if ( backwardOn === true ) {
        robot.keyToggle('s' , 'up');
        backwardOn = false;
        client.action('g8t0rboy', 'Not Backward!');
    }

    if ( message === 'forward' && backwardOn === false) {
        if ( forwardOn === true ) {
            robot.keyToggle("w", 'up');
        }
        else {
             robot.keyToggle("w", 'down');
            forwardOn = true;
            client.action('g8t0rboy', 'Not Forward!');
        }
       
    }

});

client.on('chat', (channel, user, message, self) => {
    if ( message === 'sprint' && sprintOn === false) {
        robot.keyToggle("shift", 'down');
        sprintOn = true;
        client.action('g8t0rboy', 'Sprint is on!');
    }
     else if (sprintOn === true) {
        robot.keyToggle('shift', 'up');
        sprintOn = false;
        client.action('g8t0rboy', 'Sprint is off!')
    }
});

client.on('chat', (channel, user, message, self) => {
    if ( message === 'crouch' && crouchOn === false) {
        robot.keyToggle("control", 'down');
        crouchOn = true;
        client.action('g8t0rboy', 'Crouching!');
    }
    else if ( crouchOn === true ) {
        robot.keyToggle('control', 'up');
        crouchOn = false;
        client.action('g8t0rboy', 'Standing!');
    }
});

client.on('chat', (channel, user, message, self) => {
    mess = message.split(' ');
    if ( mess[0] === 'turn' ) {
        robot.moveMouseSmooth( mess[1] , mess[2] );
    }
});

