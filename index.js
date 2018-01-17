/* Node Dependencies */
var request = require('request');

/* ClientID for program */ 
const clientID = '3752a956b4926c9';

/*
 * @desc Display an error and then exit.
 * @param {str} error the error message to display.
 */

function err(error) {
	console.log('[*] ' + error);
	process.exit()
}

/*
 * @desc Display a message.
 * @param {str} msg the message to be displayed.
 */

function log(msg) {
	console.log('[^] ' + msg);
}

if (process.argv.length < 3) {
	err('Not enough arguments.')
}

for (images = 0; images < process.argv.length - 2; images++) {
}
