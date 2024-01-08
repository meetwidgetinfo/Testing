const { z } = require("zod");

const singupSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(5, { message: "username must be atleast 5 carecters" })
    .max(20, { message: "username  must not be more than 20 charecters" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "email is invalid" })
    .min(12, { message: "email must be atleast 10 character" })
    .max(30, { message: "email  must not be more than 30 charecter" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(8, { message: "password must be atleast 10 charecters" })
    .max(30, { message: "password must not be more than 30 charecters" }),
  name: z
    .string({ required_error: "phone number is required" })
    .trim()
    .min(5, { message: "mobile number must be atleast 10 numbers" })
    .max(30, { message: "mobile number must not be more than 20 numbers" }),
});

module.exports = singupSchema;
