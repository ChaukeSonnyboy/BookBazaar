class ApiError extends Error {
  constructor(
    statuscode,
    error = [],
    stack = "",
    message = "Something went wrong"
  ) {
    super(message);
    this.statuscode = statuscode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
  }
}
