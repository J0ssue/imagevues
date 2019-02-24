import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '82d6495ae6d8d30';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    //? querying options
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    //? navigates user to this url
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map(image => {
      const formData = new FormData();
      // ? attatches the image to the formData object which turns our image from a reference to a file into a file itself
      formData.append('image', image);

      // ? this takes the entire formData and posts it to the imgur API for every file.
      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    });
    // ? returns all the images as promises to be used once loaded.
    return Promise.all(promises);
  }
};

// TOKEN = "80930c647dbe2f57a32785e044554dd890902edd",
