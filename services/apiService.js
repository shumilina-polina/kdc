import axios from "axios";

class ApiService {
  baseUrl = "http://localhost/dashboard/wp-json/project/v2";  //https://moscenterspb.space

  getCollectives = (
    offset = 0,
    per_page = -1,
    trend = [],
    location = [],
    free = false,
    paid = false
  ) => {
    const url = `${
      this.baseUrl
    }/collectives?offset=${offset}&per_page=${per_page}${
      trend.length ? `&trend=${[...trend]}` : ""
    }${location.length ? `&location=${[...location]}` : ""}${
      free && !paid ? "&free" : ""
    }${!free && paid ? "&paid" : ""}`;
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

  getSpaces = (offset = 0, per_page = -1) => {
    const url = `${this.baseUrl}/spaces?offset=${offset}&per_page=${per_page}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getSpaceByID = (id) => {
    const url = `${this.baseUrl}/spaces?id=${id}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getAffiches = (offset = 0, per_page = -1) => {
    const url = `${this.baseUrl}/affiche?offset=${offset}&per_page=${per_page}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getAffichesByMonth = (date, offset = 0, per_page = 5) => {
    const url = `${this.baseUrl}/affiche?date=${date}&offset=${offset}&per_page=5`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getEventsByDate = (date, free = false, paid = false, all = false) => {
    const url = `${this.baseUrl}/events?date=${date}${
      free && !all ? `&free=true` : ""
    }${paid && !all ? `&paid=true` : ""}`;

    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getProjects = () => {
    const url = `${this.baseUrl}/projects`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getNews = (offset = 0, per_page = 5) => {
    const url = `${this.baseUrl}/news?per_page=${per_page}&offset=${offset}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getGalleries = (offset = 0, per_page = 5) => {
    const url = `${this.baseUrl}/galleries?per_page=${per_page}&offset=${offset}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  getGalleryById = (id) => {
    const url = `${this.baseUrl}/galleries?id=${id}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  };

  postEmailJoinCollective = (name, email, phone) => {
    const url = `${this.baseUrl}/join`;
    return axios
      .post(url, {
        name: name,
        email: email,
        phone: phone,
      })
      .then((res) => res.data)
      .catch((error) => error);
  };

  postEmailAskQuestion = (name, email, phone, message) => {
    const url = `${this.baseUrl}/ask`;
    return axios
      .post(url, {
        name: name,
        email: email,
        phone: phone,
        message: message,
      })
      .then((res) => res.data)
      .catch((error) => error);
  };

  postEmailReserveSpace = (name, email, phone) => {
    const url = `${this.baseUrl}/reserve`;
    return axios
      .post(url, {
        name: name,
        email: email,
        phone: phone,
      })
      .then((res) => res.data)
      .catch((error) => error);
  };
}

export default new ApiService();
