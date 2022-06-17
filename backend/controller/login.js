const LoginModel = require("../model/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const login = async (req, res) => {
  try {
    const user = LoginModel.findOne(
      {
        email: req.body.email,
      },
      (err, response) => {
        console.log(response);
        if (response) {
          const passConfirm = bcrypt.compareSync(
            req.body.password,
            response.password
          );

          if (passConfirm == true) {
            return res.status(200).json({
              message: "Login Successfull",
            });
          } else {
            return res.status(401).json({
              message: "Password is Wrong",
            });
          }
        } else {
          return res.status(401).json({
            message: "User Not Found",
          });
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

module.exports = {
  login,
};
