const checkValidData = (email, password) => {
  // console.log(email, password);

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  ); // it will check if the eamil string valid.
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); // it will check if the password valid.

  console.log(isEmailValid, isPasswordValid);
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export default checkValidData;
