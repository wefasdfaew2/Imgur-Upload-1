/* Node Dependencies */
var request = require('request');

/* ClientID for program */ 
const clientID = '3752a956b4926c9';

var options = {
	url: 'https://api.imgur.com/3/image',

	headers: {
		'Authorization Client-ID' : '{{' + clientID + '}}'
	}
}

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
	err('Not enough arguments.');
}

function callback(err, resp, body) {
	if (!err) {
		console.log(body);
	}
}

request(options, callback);
