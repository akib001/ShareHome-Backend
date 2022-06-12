const M_user = require("../model/M_user");
const jwt = require("jsonwebtoken");

const createUser = async (req, res, next) => {
  try {
    username = req.body.username;
    email = req.body.email;
    password = req.body.password;

    const user = new M_user.User(username, email, password);
    const result = await user.createUser();
    // insert data into database or business logic()
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
    return err;
  }
};

const login = async (req, res, next) => {
  console.log(req.body);
  email = req.body.email;
  password = req.body.password;
  let loadedUser;

  M_user.User.findUser(email)
    .then((user) => {
      if (!user) {
        const error = new Error("No user with this email ID");
        error.statusCode = 401;
        res.status(401).json({ message: "authentication failed" });
        throw error;
      }
      loadedUser = user;
      return password == user.password;
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password");
        error.statusCode = 401;
        res.status(400).json({ message: "authentication failed" });
        throw error;
      }
      const token = jwt.sign({ email: loadedUser.email }, "privateKey", {
        expiresIn: "3h",
      });
      res.status(200).json({ token: token, userId: loadedUser._id.toString() });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createUser = createUser;
exports.login = login;
