import axios from "axios";

import { COLLECTIVES_PER_PAGE } from "./config";

class ApiService {
  baseUrl = "https://moscenterspb.space/wp-json/project/v2";

  getCollectives = async (
    offset = 0,
    trend = [],
    price = [],
    location = []
  ) => {
    const url = `${
      this.baseUrl
    }/collectives?per_page=${COLLECTIVES_PER_PAGE}&offset=${offset}${
      trend.length ? `&trend=${[...trend]}` : ""
    }${price.length ? `&price=${[...price]}` : ""}${
      location.length ? `&location=${[...location]}` : ""
    }`;

    console.log(url);
    return await axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };
}

export default new ApiService();
