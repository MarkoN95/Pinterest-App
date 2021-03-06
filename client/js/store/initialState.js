const { createRequest } = require("../lib/redux-request");

module.exports = {
  likeUnlikePin: createRequest(),
  pinwall: {
    request: createRequest(),
    data: {
      totalResults: null,
      items: []
    },
    page: 0
  },
  login: {
    username: "",
    password: ""
  },
  loginRequest: createRequest(),
  register: {
    username: "",
    email: "",
    password: "",
    password_confirm: ""
  },
  registerRequest: createRequest(),
  user: null,
  logoutRequest: createRequest(),
  unlinkAccount: {
    request: createRequest(),
    prov: ""
  },
  deleteAccount: createRequest(),
  removePin: {
    request: createRequest(),
    pinId: ""
  },
  addPin: {
    request: createRequest(),
    pin: {
      image_url: "",
      description: ""
    }
  }
};
