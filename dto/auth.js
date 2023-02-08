exports.RegisterResponse = (data) => {
  return {
    full_name: data.full_name,
    email: data.email,
  };
};

exports.LoginResponse = (data, token) => {
  return {
    full_name: data.full_name,
    email: data.email,
    token: token,
  };
};
