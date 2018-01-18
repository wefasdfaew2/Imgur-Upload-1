/* Node Dependencies */
var fs = require('fs');
var request = require('request');

var FileAPI = require('file-api'),
    File = FileAPI.File,
    FileReader = FileAPI.FileReader;

/* ClientID for program */ 
const clientID = '44707d4b920d48f';

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

/*
 * @desc Read to see what type of file it is.
 * @param {str} file the file that we'll be checking.
 */

function read(file) {
    /* If it's a URL */
    if (file.includes("http")) {
        return file
    } else { /* If it's a file */
        reader = new FileReader();
    
        reader.onload = function(event) {
            var base64 = event.target.result;
            return base64.slice(5, -1);
        }

        reader.readAsDataURL(new File(file));
    }
}


/*
 * @desc Callback to the request post.
 * @param {str] err if there is an error.
 * @param {str} resp way too much details for us ;0.
 * @param {str} body the resp body.
 */

function callback(err, resp, body) {
    if (!err) {
        log(body);
    } else {
        throw err
    }
}

for (images = 0; images < process.argv.length - 2; images++) {
    
    var options = {
        url: 'https://api.imgur.com/3/image',
        form: 'image=' + read(process.argv[images + 2]),
        headers: {
            'Authorization' : 'Client-ID ' + clientID
        }
    };

    log(read(process.argv[images + 2]));

    request.post(options, callback);
}
