import axios from "axios";

const BASE_URL = import.meta.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  static token = localStorage.getItem("token"); // Read token from storage

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = this.token ? { Authorization: `Bearer ${this.token}` } : {};
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      throw Array.isArray(err.response.data.error.message)
        ? err.response.data.error.message
        : [err.response.data.error.message];
    }
  }

  /** Login a user and return user data */
  static async login(username, password) {
    // Get token from API
    let res = await this.request("auth/token", { username, password }, "post");
    let token = res.token;

    // Store token and set for future API requests
    localStorage.setItem("token", token);
    JoblyApi.token = token;

    // Fetch user details
    let user = await this.request(`users/${username}`);
    return user;
  }

  /** Get company details */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies */
  static async getCompanies() {
    let res = await this.request("companies");
    return res.companies;
  }

  /** Get all users (Admin only) */
  static async getUsers() {
    let res = await this.request("users");
    return res.users;
  }

  static async getJobs() {
    let res = await this.request("jobs");
    return res.jobs;
  }
}

export default JoblyApi;
