/* Node Dependencies */
var request = require('request');
var form-data = require('form-data');

/* ClientID for program */ 
const clientID = '44707d4b920d48f';

var options = {
	url: 'https://api.imgur.com/3/image',
    form: 'image=./testImage.jpg',
	headers: {
		'Authorization' : 'Client-ID ' + clientID
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
    console.log(body);
}

request.post(options, callback);
