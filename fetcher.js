/** @format */
// /**
//  * @TODO there is still an unhandled error event
//var args = process.argv.slice(2);
//  */
const request = require("request");
const fs = require("fs");
const urlInput = process.argv[2];
const path = process.argv[3];

request(urlInput, (error, response, body) => {
	console.log("error:", error);
	// Print the error if one occurred
	console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
	console.log("body:", body); // Print the HTML for the Google homepage.

	if (!error) {
		fs.writeFile(path, body, "utf8", (err) => {
			if (err) throw err;
			console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
		});
	}
});

//in CLI< node fetcher.js http://www.example.edu ./index.html
