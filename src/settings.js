module.exports = {
  corsConfig: {
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token"
    ],
    credentials: true,
    "Access-Control-Allow-Origin": "http://localhost:4400",
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "http://localhost:4400",
    preflightContinue: false
  }
};
