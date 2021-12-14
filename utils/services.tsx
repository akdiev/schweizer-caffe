import axios from "axios";

export function getProfileData_One(ctx = null) {
  return axios
    .get(`https://login.findie.se/api/profiles/251/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}
