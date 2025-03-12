import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, phone, password } = req.body;

  if (
    [fullname, email, phone, password].some((field) => {
      field?.trim() === "";
    })
  ) {
    throw new ApiError(400, "All fields are reuired.");
  }

  const registredUser = User.findOne({
    $or: [{ email }, { phone }],
  });

  if (registredUser) {
    throw new ApiError(405, "User already registered");
    }
    
    
});

export { registerUser };
