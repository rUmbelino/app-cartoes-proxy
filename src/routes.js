const axios = require("axios");
const chalk = require("chalk");
const { BACKEND_URI } = process.env;

module.exports = app => {
  app.get("*", (req, res) => res.send("created by @rumbelino"));

  app.post("*", async (req, res) => {
    const { originalUrl, body } = req;
    debugger

    try {
      const url = BACKEND_URI.concat(originalUrl);
      const response = await axios({
        url,
        data: body,
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Cookie: req.headers.cookie || "",
          Cookies: req.headers.cookie || "",
          appSession: req.headers.cookie || ""
        }
      });

      const cookie = response.headers["set-cookie"];
      if (cookie) {
        const JSESSIONID = cookie[0].split(";")[0].split("=")[1];
        res.cookie("JSESSIONID", JSESSIONID, {
          maxAge: 900000,
          httpOnly: true,
        });
      }

      console.log(chalk.blue("success ", url));
      res.send(response.data);
    } catch (error) {
      console.log(error);
      const { status, statusText } = error.response;
      console.log(chalk.red(error, originalUrl));
      res.status(status).send(statusText);
    }
  });
};
