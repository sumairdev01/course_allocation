export const loginUser = async (email, password) => {
  console.log("Mock Login Success");
  return { email: email, uid: "mock_uid" };
};

export const forgetPassword = async (email) => {
  console.log("Mock Reset Password");
  return true;
};

export const registerUser = async (email, password) => {
  console.log("Mock Register");
  return { email: email, uid: "mock_new_uid" };
};
