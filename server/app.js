/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data = require("./data");
const http = require("http");
const hostname = "localhost";
const port = 3035;

/**
 * Start the Node Server Here...
 *
 * The http.createServer() method creates a new server that listens at the specified port.
 * The requestListener function (function (req, res)) is executed each time the server gets a request.
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */

/**
 * Suggestion: install expressjs:
 * ```
 * const express = require('express');
const app = express();
const port = 3035;
const data = require('./data');

app.get('/products/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = data.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
    );
    res.json(results);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
 * ```
 */

http
  .createServer(function (req, res) {
    // .. Here you can create your data response in a JSON format

    // Set the header to inform the client we're sending JSON
    res.setHeader("Content-Type", "application/json");

    // Send the data as a JSON string
    res.write(JSON.stringify(data));

    res.end(); //end the response
  })
  .listen(port);

console.log(`[Server running on ${hostname}:${port}]`);
