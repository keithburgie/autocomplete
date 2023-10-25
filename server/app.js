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
    origin: `${SERVER_PROTOCOL}://${APP_HOST}:${APP_PORT}`,
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const MAX_RESULTS_PER_PAGE = 4;

app.get("/search", (req, res) => {
  const query = req.query.query;
  const pageNumber = parseInt(req.query.page || "1");

  const results = data.filter((item) => {
    // Only return items that are active
    if (item.isActive === "true") {
      return (
        caseInsensitiveMatch(item._id, query) ||
        caseInsensitiveMatch(item.name, query) ||
        /**
         * Note: In real life, I would include "about" in the search, but since the
         * data all has the same "about" it makes the search results less interesting
         */
        // caseInsensitiveMatch(item.about, query) ||
        item.tags.some((tag) => caseInsensitiveMatch(tag, query))
      );
    }
  });

  // Paginate the results
  const startIndex = (pageNumber - 1) * MAX_RESULTS_PER_PAGE;

  const paginatedResults = results.slice(
    startIndex,
    startIndex + MAX_RESULTS_PER_PAGE
  );

  res.json({
    items: paginatedResults,
    total: results.length,
    currentPage: pageNumber,
    totalPages: Math.ceil(results.length / MAX_RESULTS_PER_PAGE),
  });
});

app.listen(SERVER_PORT, () => {
  console.log(
    `Server started on ${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`
  );
});
