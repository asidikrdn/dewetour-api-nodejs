exports.SuccessResult = (statusCode, message, data) => {
  return {
    status: statusCode,
    message: message,
    data: data,
  };
};

exports.ErrorResult = (statusCode, message, data = null) => {
  return {
    status: statusCode,
    message: message,
    data: data,
  };
};
