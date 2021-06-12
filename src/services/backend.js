import request from "../utils/request";

export const ENDPOINTS = {
  LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
  COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  OFFERS: `${process.env.REACT_APP_BACKEND_URL}/offre`,
  ENTERPRISE: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
};

export const Backend = {
  login: async function (email, password) {
    return request(ENDPOINTS.LOGIN, {
      method: "POST",
      data: { email, password },
    });
  },

  companies: async function () {
    return request(ENDPOINTS.COMPANIES);
  },
  getOffers: async () => {
    return request(ENDPOINTS.OFFERS);
  },
  getEnterprise: async (id) => {
    return request(ENDPOINTS.ENTERPRISE + "/" + id);
  },
};
