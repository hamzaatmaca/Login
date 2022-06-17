const UserModel = require("../model/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const register = async (req, res) => {

  try {
    const hash = await bcrypt.hashSync(req.body.password, salt);
    
    let userObj = {
      email: req.body.email,
      name: req.body.name,
      password: hash,
    };

    const user = await UserModel.create(userObj);

    return res.status(201).json({
      message: `User created`,
    });
  } catch (err) {
    return res.status(500).json({
      responseMessage:'E-mail has been using',
      errorMessage: err,
    });

  }
};
module.exports = {
  register,
};
