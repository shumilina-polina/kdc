import axios from "axios";

class ApiService {
  baseUrl = "http://localhost/dashboard/wp-json/wp/v2";

  getCollectives = () => {
    return axios
      .get(`${this.baseUrl}/collectives`)
      .then((res) => res.data)
      .catch((error) => error.json());
  };
}

export default new ApiService();
