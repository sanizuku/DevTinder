const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Please Enter Name");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not Valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  }
};

const validateEditProfileData = (req) => {
  const ALLOWED_UPDATES = [
    "photoUrl",
    "gender",
    "skills",
    "age",
    "about",
    "firstName",
    "lastName",
  ];
  const isUpdatedAllowed = Object.keys(req.body).every((fields) =>
    ALLOWED_UPDATES.includes(fields)
  );
  // if (data?.skills.length > 10) {
  //   throw new Error("Skills can bot be greater than 10");
  // }
  return isUpdatedAllowed;
};
module.exports = { validateSignUpData, validateEditProfileData };
