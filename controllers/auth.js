const AuthRepository = require("../use_cases/auth");
const { SuccessResult, ErrorResult } = require("../dto/result");
const { RegisterResponse, LoginResponse } = require("../dto/auth");
const { HashPassword, ComparePassword } = require("../pkg/bcrypt/bcrypt");

let AuthController = {};

AuthController.Register = async (req, res) => {
  try {
    // hashing password
    let hashedPassword = await HashPassword(req.fields.password, 10);
    if (typeof hashedPassword !== "string") {
      throw new Error(errHasing);
    }
    console.log(req.fields.password);
    console.log(hashedPassword);

    // insert data to database
    const userRegistered = await AuthRepository.Register({
      ...req.fields,
      password: hashedPassword,
    });

    // send response
    res
      .status(200)
      .send(SuccessResult(200, "success", RegisterResponse(userRegistered)));
  } catch (err) {
    // send error response
    res.status(400).send(ErrorResult(400, err.message));
  }
};

AuthController.Login = async (req, res) => {
  try {
    const userLoggedIn = await AuthRepository.Login(req.fields.email);
    const isPasswordTrue = await ComparePassword(
      req.fields.password,
      userLoggedIn.password
    );
    if (!isPasswordTrue) {
      throw new Error("Wrong password");
    }

    res
      .status(200)
      .send(SuccessResult(200, "success", LoginResponse(userLoggedIn, "abcd")));
  } catch (err) {
    res.status(400).send(ErrorResult(400, err.message));
  }
};

module.exports = AuthController;
