const AuthController = require("../controllers/auth");

exports.auth = (router) => {
  // login endpoint
  router.post("/login", AuthController.Login);

  // register endpoint
  router.post("/register", AuthController.Register);
};
