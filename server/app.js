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
const express = require("express");
const cors = require("cors");
const {
  APP_HOST,
  APP_PORT,
  SERVER_PORT,
  SERVER_HOST,
  SERVER_PROTOCOL,
} = require("../config/development.config");
const { caseInsensitiveMatch } = require("./utils");

const app = express();

app.use(
  cors({
    origin: `${SERVER_PROTOCOL}://${APP_HOST}:${APP_PORT}`, // Allow only 'http://localhost:3030' to access your Express server
    optionsSuccessStatus: 200, // Respond with 200 for preflight OPTIONS requests
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/search", (req, res) => {
  const query = req.query.query;

  const results = data.filter((item) => {
    // Only return items that are active
    if (item.isActive === "true") {
      return (
        caseInsensitiveMatch(item._id, query) ||
        caseInsensitiveMatch(item.name, query) ||
        caseInsensitiveMatch(item.about, query) ||
        item.tags.some((tag) => caseInsensitiveMatch(tag, query))
      );
    }
  });

  res.json({ items: results });
});

app.listen(SERVER_PORT, () => {
  console.log(
    `Server started on ${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`
  );
});
