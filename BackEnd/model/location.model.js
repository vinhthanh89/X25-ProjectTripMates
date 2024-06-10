import mongoose from "mongoose";

const Location = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
  },
  continent : {
    type : String
  },
  country : {
    type : String
  },
  locationThumbnail: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

export default mongoose.model("locations", Location);
