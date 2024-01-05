const User = require("../Models/user_model");
const bcrypt = require("bcryptjs");

const create = async (req, res) => {
  try {
    const { name, email, username, password, role } = req.body;
    const isExist = await User.findOne({ email });

    if (isExist) {
      return res.status(403).send("user already exist");
    }

    const notExist = await User.create({
      name,
      email,
      username,
      password,
      role,
    });

    res.status(200).json({
      msg: "register successful",
      token: await notExist.generateToken(),
      userId: notExist._id.toString(),
    });
  } catch (error) {
    res.status(404).send("page not found");
  }
};
const getAll = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send("page not found");
  }
};

const update = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!req.params.id) {
      res.status(404).send("page not found");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send("bad request");
  }
};

const del = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send("not found");
    }
    res.send(user);
  } catch (error) {
    res.status(404).send("not found");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExist = await User.findOne({ email });

    if (!isExist) {
      return res.status(400).send("invalid email id or password");
    }

    // const comparePassword = await bcrypt.compare(password, isExist.password);
    const comparePassword = await isExist.compare(password);

    if (comparePassword) {
      res.status(200).json({
        msg: "login successful",
        token: await isExist.generateToken(),
        userId: isExist._id.toString(),
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "invalid user details" });
  }
};

module.exports = { getAll, create, update, del, login };
