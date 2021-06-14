import request from "../utils/request";

export const ENDPOINTS = {
  LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
  COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  APPLICANTS: `${process.env.REACT_APP_BACKEND_URL}/postulant`,
  CONVERSATION: `${process.env.REACT_APP_BACKEND_URL}/chat/conversation/`,
  MESSAGES :  `${process.env.REACT_APP_BACKEND_URL}/chat/message/`
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

  applicants: async function () {
    return request(ENDPOINTS.APPLICANTS);
  },

  deleteConversation: async function(id){
    return request(ENDPOINTS.CONVERSATION + localStorage.getItem("loginId") + "/" + id,{
      method:"DELETE"
    });
  },

  message: async function(id){
    return request(ENDPOINTS.MESSAGES + localStorage.getItem("loginId") + "/" + id);
  },

  setMessage: async function(id, message){
    return request(ENDPOINTS.MESSAGES + localStorage.getItem("loginId") + "/" + id,{
      method:"POST",
      data: {message}
    });
  },


};
