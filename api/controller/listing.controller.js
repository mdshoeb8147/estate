import Listing from "../models/listing.model";
import { errorHandler } from "../utils/error";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(401, "listing not found"));
  }
  if (req.user.id !== listing.userRef()) {
    return next(errorHandler(401, "you can delete your own listing"));
  }
  try {
    await Listing.findByIdAndDelete(req.params.id);
  } catch (error) {
    next(error);
  }
};
