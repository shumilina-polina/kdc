import axios from "axios";

class ApiService {
  baseUrl = "https://moscenterspb.space/wp-json/project/v2";

  getCollectives = (
    offset = 0,
    trend = [],
    price = [],
    location = []
  ) => {
    const url = `${
      this.baseUrl
    }/collectives?offset=${offset}${
      trend.length ? `&trend=${[...trend]}` : ""
    }${price.length ? `&price=${[...price]}` : ""}${
      location.length ? `&location=${[...location]}` : ""
    }`;
    console.log(url)

    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };
}

export default new ApiService();
