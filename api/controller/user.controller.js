import { errorHandler } from "../utils/error";

export const testRoute = (req, res) => {
  res.send("Hello welcome to test route!");
};

export const deleteUser = (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "you can only delete your account"));
};
