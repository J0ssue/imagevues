import qs from "qs"; //? turns object into url string

const CLIENT_ID = "82d6495ae6d8d30",
  ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    //? querying options
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token"
    };
    //? navigates user to this url
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  }
};

// TOKEN = "80930c647dbe2f57a32785e044554dd890902edd",
