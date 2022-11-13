const argon2 = require("argon2");//password hashing
const { User, validateSignup, validateLogin } = require("../models/user");//imnported models object and functions

const getUser = async (req, res) => {//user details return
  try {
    let data;
    if(req.query.id)
     data = await User.findById(req.query.id);
    data.password = undefined;
    res.status(200).send({ user: data });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const signup = async (req, res) => {
  try {
    const { error } = validateSignup(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user)
      return res
        .status(409)
        .send({ message: "Admin with given Email already exists!" });
    const hashPassword = await argon2.hash(req.body.password);
    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User Created successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const login = async (req, res, next) => {
  try {
    const { error } = validateLogin(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user)
      return res.status(401).send({ message: "Invalid Email  or Password" });

    if (await argon2.verify(user.password, req.body.password)) {
      const token = user.generateAuthToken();//jwt token
      user.password = undefined;
      return res.status(200).send({
        token: "Bearer " + token,
        user,
        message: "Logged In Successfully",
      });
    } else {
      return res.status(401).send({ message: "Invalid Password" }); // password did not match
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  login,
  signup,
  getUser,
};
