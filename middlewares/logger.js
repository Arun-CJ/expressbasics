module.exports = {
  logger: (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getMonth();
    console.log(method, url, time);
    next();
  },
  auth: (req, res, next) => {
    console.log("user logged in");
    next();
  },
};
