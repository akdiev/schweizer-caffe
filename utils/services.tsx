import axios from "axios";

export function getProfileData_One(ctx = null) {
  return axios
    .get(`https://login.guestie.se/api/profiles/330/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}
