/** @format */
const request = require("request");
request("http://www.example.edu/", (error, response, body) => {
	console.log("error:", error); // Print the error if one occurred
	console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
	console.log("body:", body); // Print the HTML for the Google homepage.
	//   import { writeFile } from "fs";
	//   import { Buffer } from "buffer";
	// const request = require("request");

	// 	writeFile("message.txt", "Hello Node.js", "utf8", callback);
});
