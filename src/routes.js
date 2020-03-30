const axios = require("axios");
const chalk = require("chalk");
const { BACKEND_URI } = process.env;

module.exports = app => {
  app.get("*", (req, res) => res.send("created by @rumbelino"));

  app.post("*", async (req, res) => {
    res.send("hello world");
    /*
    const { originalUrl, body } = req;
    debugger;

    const { headers } = req;
    delete headers.host;

    try {
      const url = BACKEND_URI.concat(originalUrl);
      const response = await axios({
        url,
        headers,
        data: body,
        method: "post"
      });

      Object.entries(response.headers).forEach(([key, value]) => {
        res.setHeader(key, value);
      });

      console.log(chalk.blue("success ", url));
      res.send(response.data);
    } catch (error) {
      const { status, statusText } = error.response;
      console.log(chalk.red(error, originalUrl));
      res.status(status).send(statusText);
    }
    */
  });
};
