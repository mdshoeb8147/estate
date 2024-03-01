import { errorHandler } from "../utils/error";
import User from "../models/user.model.js";

export const testRoute = (req, res) => {
  res.send("Hello welcome to test route!");
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "you can only delete your account"));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted");
  } catch (error) {
    next(error);
  }
};
