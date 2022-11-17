const valid = ({ username, email, password, cfPassword }) => {
  if (!username) {
    return "Please add your user name.";
  } else if (username.replace(/ /g, "").length > 25) {
    return "User name is up to 25 characters long.";
  }

  if (!email) {
    return "Please add your email.";
  } else if (!validateEmail(email)) {
    return "Email format is incorrect.";
  }

  if (!password) {
    return "Please add your password.";
  } else if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }

  if (password !== cfPassword) {
    return "Confirm password did not match.";
  }

  return "";
};

function validateEmail(email) {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
