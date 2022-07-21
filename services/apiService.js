import axios from "axios";

class ApiService {
  baseUrl = "https://moscenterspb.space/wp-json/project/v2";
  //global "https://moscenterspb.space/wp-json/project/v2"
  //local "http://localhost/dashboard/wp-json/project/v2"

  getCollectives = (offset = 0, trend = [], price = [], location = []) => {
    const url = `${this.baseUrl}/collectives?offset=${offset}${
      trend.length ? `&trend=${[...trend]}` : ""
    }${price.length ? `&price=${[...price]}` : ""}${
      location.length ? `&location=${[...location]}` : ""
    }`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getCollectiveByID = (id) => {
    const url = `${this.baseUrl}/collectives?id=${id}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getSpaces = (offset = 0) => {
    const url = `${this.baseUrl}/spaces?offset=${offset}`;
    return axios
      .get(url)
      .then((res) => ({
        total: res.data.total,
        spaces: res.data.spaces,
      }))
      .catch((error) => error);
  };

  getSpaceByID = (id) => {
    const url = `${this.baseUrl}/spaces?id=${id}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getAffichesByMonth = (month) => {
    const url = `${this.baseUrl}/affiche?month=${month}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };
}

export default new ApiService();
