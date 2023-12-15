const express = require("express");
const next = require("next");
const axios = require("axios");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handler = app.getRequestHandler();

/**
 * Application init
 */
app
  .prepare()
  .then(async () => {
    const server = express();

    server.get("*", async (req, res) => {
      if (req.url.includes("_next") || req.url.includes("/static")) {
        return handler(req, res);
      }

      try {
        const path = req._parsedUrl.path
          ? req._parsedUrl.path.split("?")[0]
          : "";
        const page = path;
        const result = await axios.get("http://localhost:3001/recipes");

        req.recipes = result?.data || {};

        app.render(req, res, page, req.query);
      } catch (error) {
        console.log(error, "-------------ERROR--------------");

        return handler(req, res);
      }
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(() => {
    process.exit(1);
  });
