const axios = require("axios");
const chalk = require("chalk");
const { BACKEND_URI } = process.env;

module.exports = app => {
  app.get("*", (req, res) => res.send("created by @rumbelino"));

  app.post("*", async (req, res) => {
    const { originalUrl, body } = req;

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

      const { data } = response;
      res.send(isNaN(data) ? data : `${data}`);
    } catch (error) {
      console.log(error);
      const {
        response = { status: 500, statusText: error.toString() }
      } = error;
      const { status, statusText } = response;
      console.log(chalk.red(error, originalUrl));
      res.status(status).send(statusText);
    }
  });
};
