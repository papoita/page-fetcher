/** @format */
const request = require("request");
const fs = require("fs");
request("http://www.example.edu/", (error, response, body) => {
	console.log("error:", error); // Print the error if one occurred

	console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
	console.log("body:", body); // Print the HTML for the Google homepage.
	fs.writeFile("bodyReq.html", body, "utf8", request);
	// (err) => {
	// 	if (err) throw err;
	console.log(`Downloaded and saved ${body.length} bytes to ./bodyReq.txt`);
});
