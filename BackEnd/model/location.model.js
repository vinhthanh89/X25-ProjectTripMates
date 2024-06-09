import mongoose from "mongoose";

const Location = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
  },
  locationDependent: {
    continent : {
      type : String
    },
    country : {
      type : String
    }
  },
  locationThumbnail: {
    type: String,
    required: true,
  },
  coordinates: {
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.model("locations", Location);
