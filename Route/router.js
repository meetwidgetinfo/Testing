const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user_controller");
const singupSchema = require("../Validators/auth_validator");
const validate = require("../Middleware/validate_middleware");

router.route("/getAll").get(userController.getAll);
router.route("/create").post(validate(singupSchema), userController.create);
router.route("/update/:id").put(userController.update);
router.route("/delete/:id").delete(userController.del);
router.route("/login").post(userController.login);

module.exports = router;
