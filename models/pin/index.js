require("../user");
const mongoose = require("mongoose");

const pinManagementPlugin = require("./plugins/pin-management-plugin");
const normalizerPlugin = require("./plugins/normalizer-plugin");
const paginationPlugin = require("../common/pagination-plugin");

const Pin = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  image_url: String,
  description: { type: String, default: "" },
  liked_by: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  ]
});

Pin.plugin(pinManagementPlugin);
Pin.plugin(normalizerPlugin);
Pin.plugin(paginationPlugin);

module.exports = mongoose.model("pin", Pin);
